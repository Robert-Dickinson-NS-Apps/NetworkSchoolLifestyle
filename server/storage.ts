import { users, contactInquiries, newsletterSubscriptions, type User, type InsertUser, type ContactInquiry, type InsertContactInquiry, type NewsletterSubscription, type InsertNewsletterSubscription } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactInquiries: Map<number, ContactInquiry>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private currentUserId: number;
  private currentInquiryId: number;
  private currentSubscriptionId: number;

  constructor() {
    this.users = new Map();
    this.contactInquiries = new Map();
    this.newsletterSubscriptions = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
    this.currentSubscriptionId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = this.currentInquiryId++;
    const inquiry: ContactInquiry = { 
      ...insertInquiry, 
      id,
      createdAt: new Date()
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = this.currentSubscriptionId++;
    const subscription: NewsletterSubscription = { 
      ...insertSubscription, 
      id,
      createdAt: new Date()
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined> {
    return Array.from(this.newsletterSubscriptions.values()).find(
      (subscription) => subscription.email === email,
    );
  }
}

export const storage = new MemStorage();
