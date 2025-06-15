import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, Star, TrendingUp, TrendingDown, Brain, Target, Award, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

interface AnalysisResult {
  overallScore: number;
  category: string;
  strengths: string[];
  improvements: string[];
  detailedScores: {
    content: number;
    communication: number;
    confidence: number;
    technical: number;
  };
  recommendations: string[];
  nextSteps: string[];
}

const MockInterviewResult = () => {
  const navigate = useNavigate();
  const { moduleId } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  // Mock AI analysis - in real app, this would come from AI processing
  useEffect(() => {
    const simulateAIAnalysis = async () => {
      // Simulate AI processing time
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const mockResult: AnalysisResult = {
        overallScore: 78,
        category: "行為面試",
        strengths: [
          "回答結構清晰，使用STAR方法表達經驗",
          "語調自然，展現良好的溝通技巧",
          "具體的案例分享，展現實際解決問題的能力",
          "時間控制良好，回答完整且簡潔"
        ],
        improvements: [
          "可以更多強調量化成果和具體數據",
          "在描述團隊協作時可以更突出個人貢獻",
          "建議增加更多技術細節的說明",
          "可以展現更多主動性和領導力的例子"
        ],
        detailedScores: {
          content: 82,
          communication: 85,
          confidence: 72,
          technical: 75
        },
        recommendations: [
          "練習更多技術深度問題的回答",
          "準備更多量化成果的具體例子",
          "加強對行業趨勢和公司背景的了解",
          "提升非語言溝通技巧（眼神接觸、手勢等）"
        ],
        nextSteps: [
          "完成技術面試模組以提升技術表達能力",
          "參加案例研究練習以增強分析思維",
          "觀看面試技巧相關影片學習最佳實踐",
          "與導師或朋友進行模擬面試練習"
        ]
      };

      setResult(mockResult);
      setIsLoading(false);
    };

    simulateAIAnalysis();
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 80) return <Badge className="bg-green-100 text-green-700">優秀</Badge>;
    if (score >= 60) return <Badge className="bg-yellow-100 text-yellow-700">良好</Badge>;
    return <Badge className="bg-red-100 text-red-700">需改進</Badge>;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="py-4 px-4 border-b">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" onClick={() => navigate('/student/mock-interview')}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xs">🏷️</span>
                  </div>
                  <h1 className="text-xl font-bold text-foreground">TAGNOVA</h1>
                </div>
              </div>
              <h2 className="text-lg font-semibold">AI 分析中</h2>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-4xl py-8">
          <Card className="text-center">
            <CardContent className="pt-8 pb-8">
              <div className="space-y-6">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Brain className="h-8 w-8 text-blue-600 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI 正在分析您的面試表現</h3>
                  <p className="text-muted-foreground">
                    我們的AI正在分析您的回答內容、溝通技巧和整體表現，請稍候...
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>分析進度</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 px-4 border-b">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => navigate('/student/mock-interview')}>
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xs">🏷️</span>
                </div>
                <h1 className="text-xl font-bold text-foreground">TAGNOVA</h1>
              </div>
            </div>
            <h2 className="text-lg font-semibold">面試結果分析</h2>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-4xl py-6">
        <div className="space-y-6">
          {/* Overall Score */}
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-6 w-6 text-green-500" />
                  <span className="text-lg font-semibold">面試完成</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-3">
                    <span className={`text-4xl font-bold ${getScoreColor(result.overallScore)}`}>
                      {result.overallScore}
                    </span>
                    <div className="text-left">
                      <div>/ 100</div>
                      {getScoreBadge(result.overallScore)}
                    </div>
                  </div>
                  <p className="text-muted-foreground">整體面試表現分數</p>
                </div>

                <Badge variant="outline" className="bg-white">
                  {result.category}
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Scores */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                詳細評分
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>內容質量</span>
                    <span className={`font-semibold ${getScoreColor(result.detailedScores.content)}`}>
                      {result.detailedScores.content}
                    </span>
                  </div>
                  <Progress value={result.detailedScores.content} />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>溝通表達</span>
                    <span className={`font-semibold ${getScoreColor(result.detailedScores.communication)}`}>
                      {result.detailedScores.communication}
                    </span>
                  </div>
                  <Progress value={result.detailedScores.communication} />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>自信程度</span>
                    <span className={`font-semibold ${getScoreColor(result.detailedScores.confidence)}`}>
                      {result.detailedScores.confidence}
                    </span>
                  </div>
                  <Progress value={result.detailedScores.confidence} />
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>技術能力</span>
                    <span className={`font-semibold ${getScoreColor(result.detailedScores.technical)}`}>
                      {result.detailedScores.technical}
                    </span>
                  </div>
                  <Progress value={result.detailedScores.technical} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strengths and Improvements */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <TrendingUp className="h-5 w-5" />
                  表現亮點
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {result.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-700">
                  <TrendingDown className="h-5 w-5" />
                  改進建議
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {result.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                AI 建議
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {result.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                    <Star className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{rec}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                下一步行動
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {result.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center">
            <Button onClick={() => navigate('/student/mock-interview')} variant="outline">
              返回練習
            </Button>
            <Button onClick={() => navigate(`/student/mock-interview-session/${moduleId}`)}>
              重新面試
            </Button>
            <Button onClick={() => navigate('/student/dashboard')} variant="outline">
              回到儀表板
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInterviewResult;