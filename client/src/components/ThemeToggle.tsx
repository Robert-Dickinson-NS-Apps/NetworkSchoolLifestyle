import { Moon, Sun, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, setTheme, effectiveTheme } = useTheme();

  const themes = [
    {
      value: 'light',
      label: 'Light',
      icon: Sun,
    },
    {
      value: 'dark',
      label: 'Dark',
      icon: Moon,
    },
    {
      value: 'system',
      label: 'System',
      icon: Monitor,
    },
  ];

  const currentTheme = themes.find(t => t.value === theme);
  const CurrentIcon = currentTheme?.icon || Sun;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="w-auto px-3 gap-2 hover:shadow-md transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50 min-h-[44px] text-sm sm:text-base"
        >
          <CurrentIcon className="h-4 w-4 transition-transform duration-300" />
          <span className="hidden sm:inline font-medium">{currentTheme?.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 sm:w-40 animate-in slide-in-from-top-2 duration-200">
        {themes.map((themeOption) => {
          const Icon = themeOption.icon;
          return (
            <DropdownMenuItem
              key={themeOption.value}
              onClick={() => setTheme(themeOption.value as any)}
              className={`
                cursor-pointer transition-all duration-200 hover:bg-accent/80 gap-3 min-h-[48px] flex items-center
                ${theme === themeOption.value ? "bg-accent text-accent-foreground font-semibold" : ""} 
                hover:scale-105 hover:shadow-sm
              `}
            >
              <Icon className="h-4 w-4" />
              <span>{themeOption.label}</span>
              {theme === themeOption.value && (
                <span className="ml-auto text-xs text-accent-foreground/70">✓</span>
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}