import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Phone, Send, Building2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";

interface Message {
  id: string;
  text: string;
  sender: "company" | "student";
  timestamp: Date;
}

interface InterviewInfo {
  date: string;
  time: string;
  location: string;
  contact: string;
  type: "onsite" | "online";
}

interface Company {
  id: string;
  name: string;
  position: string;
  logo: string;
  initialMessages: Message[];
  interviewInfo: InterviewInfo;
  quickResponses: string[];
}

const companiesData: Record<string, Company> = {
  "1": {
    id: "1",
    name: "台積電",
    position: "軟體工程師",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop",
    initialMessages: [
      {
        id: "1",
        text: "恭喜您通過初步篩選，我們想邀請您參加下週的技術面試。",
        sender: "company",
        timestamp: new Date(Date.now() - 3600000)
      },
      {
        id: "2",
        text: "謝謝您的邀請！我很期待能參加面試，請問需要準備什麼資料嗎？",
        sender: "student",
        timestamp: new Date(Date.now() - 3300000)
      }
    ],
    interviewInfo: {
      date: "2024-12-23",
      time: "14:00",
      location: "新竹科學園區台積電總部",
      contact: "03-563-6688",
      type: "onsite"
    },
    quickResponses: [
      "謝謝！我會準時到達",
      "請問需要帶作品集嗎？",
      "是否有技術測驗？"
    ]
  },
  "2": {
    id: "2",
    name: "聯發科技",
    position: "前端開發工程師", 
    logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=150&h=150&fit=crop",
    initialMessages: [
      {
        id: "1",
        text: "感謝您的應徵，我們需要您提供更多關於React專案的詳細資訊。",
        sender: "company",
        timestamp: new Date(Date.now() - 7200000)
      },
      {
        id: "2",
        text: "好的，我會整理相關的專案資料給您參考。",
        sender: "student",
        timestamp: new Date(Date.now() - 6900000)
      }
    ],
    interviewInfo: {
      date: "2024-12-24",
      time: "10:30",
      location: "線上面試 (Google Meet)",
      contact: "meet.google.com/abc-defg-hij",
      type: "online"
    },
    quickResponses: [
      "我會準備詳細的專案說明",
      "可以安排線上展示嗎？",
      "什麼時候方便討論？"
    ]
  },
  "3": {
    id: "3",
    name: "Google Taiwan",
    position: "產品經理實習生",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=150&h=150&fit=crop",
    initialMessages: [
      {
        id: "1", 
        text: "您好！我們對您的背景很感興趣，想了解您的產品思維。",
        sender: "company",
        timestamp: new Date(Date.now() - 5400000)
      },
      {
        id: "2",
        text: "很榮幸！我很願意分享我對產品設計的想法。",
        sender: "student",
        timestamp: new Date(Date.now() - 5100000)
      }
    ],
    interviewInfo: {
      date: "2024-12-26",
      time: "15:30",
      location: "台北市信義區Google辦公室",
      contact: "02-8729-7500",
      type: "onsite"
    },
    quickResponses: [
      "我會準備產品分析案例",
      "可以討論實習內容嗎？",
      "需要什麼準備資料？"
    ]
  },
  "4": {
    id: "4",
    name: "Microsoft Taiwan", 
    position: "雲端解決方案架構師",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=150&h=150&fit=crop",
    initialMessages: [
      {
        id: "1",
        text: "恭喜！我們很高興提供您這個職位，請查看詳細的聘用條件。",
        sender: "company",
        timestamp: new Date(Date.now() - 9000000)
      },
      {
        id: "2",
        text: "太感謝了！我會仔細閱讀聘用條件並盡快回覆。",
        sender: "student",
        timestamp: new Date(Date.now() - 8700000)
      }
    ],
    interviewInfo: {
      date: "2024-12-27",
      time: "09:00",
      location: "台北市信義區微軟辦公室",
      contact: "02-8729-2568",
      type: "onsite"
    },
    quickResponses: [
      "謝謝這個機會！",
      "什麼時候開始上班？",
      "有什麼需要準備的嗎？"
    ]
  }
};

const StudentChatRoom = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const company = companiesData[id || "1"] || companiesData["1"];
  
  const [messages, setMessages] = useState<Message[]>(company.initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [interviewScheduled, setInterviewScheduled] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "student",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue("");

    // Simulate company response
    if (inputValue.includes("謝謝") || inputValue.includes("準備") || inputValue.includes("時間")) {
      setTimeout(() => {
        let responseText = "";
        
        switch (company.id) {
          case "1":
            responseText = "太好了！請記得帶上您的履歷和相關證書，我們期待與您見面。";
            break;
          case "2": 
            responseText = "沒問題！我們會安排技術主管與您討論，也歡迎您準備任何問題。";
            break;
          case "3":
            responseText = "很棒！我們很期待看到您的創意想法和對產品的理解。";
            break;
          case "4":
            responseText = "好的！我們的HR會與您聯絡後續的入職相關事宜。";
            break;
          default:
            responseText = "好的！我們期待與您的進一步交流。";
        }
        
        const response: Message = {
          id: (Date.now() + 1).toString(),
          text: responseText,
          sender: "company",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, response]);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleQuickResponse = (text: string) => {
    setInputValue(text);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHeader title="TAGNOVA" />

      <div className="flex-1 container mx-auto max-w-2xl p-4 flex flex-col">
        {/* Company Info */}
        <Card className="mb-4 border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarImage src={company.logo} />
                <AvatarFallback>
                  <Building2 className="h-6 w-6" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-blue-900">{company.name}</h3>
                <p className="text-sm text-blue-700">{company.position}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interview Info Card */}
        {interviewScheduled && (
          <Card className="mb-4 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                面試資訊
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span><strong>日期：</strong>{company.interviewInfo.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span><strong>時間：</strong>{company.interviewInfo.time}</span>
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span><strong>地點：</strong>{company.interviewInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 md:col-span-2">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span><strong>聯絡：</strong>{company.interviewInfo.contact}</span>
                </div>
              </div>
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                {company.interviewInfo.type === "onsite" ? "現場面試" : "線上面試"}
              </Badge>
            </CardContent>
          </Card>
        )}

        {/* Chat Messages */}
        <Card className="flex-1 flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              與 {company.name} 對話
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <div className="flex-1 space-y-4 overflow-y-auto max-h-96 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "student" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[80%] ${
                      message.sender === "student" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={message.sender === "company" ? company.logo : "https://images.unsplash.com/photo-1494790108755-2616b93a65f6?w=150&h=150&fit=crop"} />
                      <AvatarFallback>
                        {message.sender === "company" ? <Building2 className="h-4 w-4" /> : "我"}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === "student"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="輸入訊息..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Response Buttons */}
        <div className="mt-4 flex flex-wrap gap-2">
          {company.quickResponses.map((response, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleQuickResponse(response)}
            >
              {response}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentChatRoom;