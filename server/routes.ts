import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { z } from "zod";
import { readFileSync, existsSync } from "fs";
import { join } from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      res.json({ success: true, inquiry });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to submit inquiry" });
      }
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getNewsletterSubscriptionByEmail(validatedData.email);
      if (existing) {
        res.status(409).json({ error: "Email already subscribed" });
        return;
      }

      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.json({ success: true, subscription });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid email format", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to subscribe to newsletter" });
      }
    }
  });

  // Source code viewer endpoint
  app.get("/api/source/*", (req, res) => {
    try {
      const filePath = req.url.replace('/api/source/', '');
      const fullPath = join(process.cwd(), filePath);
      
      // Security check - ensure file is within project directory
      if (!fullPath.startsWith(process.cwd())) {
        return res.status(403).json({ error: "Access denied" });
      }
      
      // Check if file exists
      if (!existsSync(fullPath)) {
        return res.status(404).json({ error: "File not found" });
      }
      
      // Read and return file content
      const content = readFileSync(fullPath, 'utf-8');
      
      res.setHeader('Content-Type', 'text/plain');
      res.send(content);
      
    } catch (error) {
      console.error("Error reading source file:", error);
      res.status(500).json({ error: "Failed to read file" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
