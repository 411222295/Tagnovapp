import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const LanguageSelect = () => {
  const navigate = useNavigate();

  const handleLanguageSelect = (language: string) => {
    localStorage.setItem('language', language);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">選擇語言 / Select Language</CardTitle>
          <CardDescription className="text-center">
            請選擇您偏好的語言 / Please select your preferred language
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={() => handleLanguageSelect('zh-TW')} 
            className="w-full"
            variant="outline"
          >
            繁體中文
          </Button>
          <Button 
            onClick={() => handleLanguageSelect('en')} 
            className="w-full"
            variant="outline"
          >
            English
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LanguageSelect;