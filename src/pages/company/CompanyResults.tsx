import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Users, Calendar, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "@/components/PageHeader";

const CompanyResults = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "成功配對", value: "23", icon: Users, trend: "+12%" },
    { title: "面試邀請", value: "18", icon: Calendar, trend: "+8%" },
    { title: "成功錄取", value: "7", icon: Award, trend: "+15%" },
    { title: "配對成功率", value: "76%", icon: TrendingUp, trend: "+3%" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="TAGNOVA" />

      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-sm py-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">招聘成效分析</h2>
            <p className="text-sm text-muted-foreground">查看您的人才招聘表現與統計數據</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-muted-foreground">{stat.title}</p>
                      <p className="text-xl font-bold">{stat.value}</p>
                      <Badge variant="secondary" className="text-xs">
                        {stat.trend}
                      </Badge>
                    </div>
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Matches */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">最新配對結果</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">張小明</p>
                  <p className="text-sm text-muted-foreground">前端工程師</p>
                </div>
                <Badge className="bg-green-100 text-green-700">已錄取</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">李小華</p>
                  <p className="text-sm text-muted-foreground">UI/UX 設計師</p>
                </div>
                <Badge className="bg-blue-100 text-blue-700">面試中</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">王小美</p>
                  <p className="text-sm text-muted-foreground">數據分析師</p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-700">待回覆</Badge>
              </div>
            </CardContent>
          </Card>

          <Button 
            onClick={() => navigate('/company/talent-matching')}
            className="w-full bg-gradient-to-r from-pink-200 to-purple-200 text-gray-700 hover:opacity-90"
          >
            查看更多人才
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyResults;