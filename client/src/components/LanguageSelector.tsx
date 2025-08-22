import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { languages } from "@/lib/i18n";
import { useState } from "react";

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setIsOpen(false);
  };

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 hover:shadow-md transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 min-h-[44px] px-3 text-sm sm:text-base"
        >
          <Globe 
            size={16} 
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
          <span className="hidden sm:inline">
            <span className="inline-block flag-hover flag-selected transition-all duration-300 text-lg">
              {currentLanguage?.flag}
            </span>
            <span className="ml-2 font-medium">{currentLanguage?.name}</span>
          </span>
          <span className="sm:hidden">
            <span className="inline-block flag-hover flag-selected transition-all duration-300 text-xl">
              {currentLanguage?.flag}
            </span>
          </span>
          <ChevronDown 
            size={14} 
            className={`hidden sm:inline transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-64 sm:w-56 max-h-80 overflow-y-auto animate-in slide-in-from-top-2 duration-200"
      >
        {languages.map((lang, index) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`
              cursor-pointer transition-all duration-200 hover:bg-accent/80 min-h-[48px] flex items-center
              ${language === lang.code ? "bg-accent text-accent-foreground font-semibold" : ""} 
              animate-in slide-in-from-left-1 hover:scale-105 hover:shadow-sm
            `}
            style={{
              animationDelay: `${index * 20}ms`,
              animationFillMode: 'backwards'
            }}
          >
            <span 
              className={`
                mr-3 text-lg inline-block transition-transform duration-200 flag-entrance flag-hover
                ${language === lang.code ? 'flag-selected' : ''}
              `}
            >
              {lang.flag}
            </span>
            <span className="font-medium">{lang.name}</span>
            {language === lang.code && (
              <span className="ml-auto text-xs text-accent-foreground/70 animate-pulse">
                ✓
              </span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}