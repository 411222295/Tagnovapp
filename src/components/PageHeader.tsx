import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { useToast } from "@/hooks/use-toast";

interface PageHeaderProps {
  title: string;
  showBackButton?: boolean;
  showHomeButton?: boolean;
  onBackClick?: () => void;
  onHomeClick?: () => void;
}

export const PageHeader = ({ 
  title, 
  showBackButton = true, 
  showHomeButton = true,
  onBackClick,
  onHomeClick 
}: PageHeaderProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleBackClick = () => {
    try {
      if (onBackClick) {
        onBackClick();
      } else {
        navigate(-1);
      }
    } catch (error) {
      toast({
        title: "導航錯誤",
        description: "無法返回上一頁，請稍後再試。",
        variant: "destructive",
      });
    }
  };

  const handleHomeClick = () => {
    try {
      if (onHomeClick) {
        onHomeClick();
      } else {
        navigate("/");
      }
    } catch (error) {
      toast({
        title: "導航錯誤",
        description: "無法返回首頁，請稍後再試。",
        variant: "destructive",
      });
    }
  };

  return (
    <header className="border-b border-border bg-card p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBackButton && (
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleBackClick}
              className="h-9 w-9 hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              aria-label="返回上一頁"
              title="返回上一頁"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
          )}
          {showHomeButton && (
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleHomeClick}
              className="h-9 w-9 hover:bg-accent hover:text-accent-foreground focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              aria-label="返回首頁"
              title="返回首頁"
            >
              <Home className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Logo size="md" />
        <div className="w-[78px]"></div> {/* Spacer for center alignment */}
      </div>
    </header>
  );
};