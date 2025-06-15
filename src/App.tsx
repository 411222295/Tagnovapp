import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Common Pages
import Index from "./pages/Index";
import LanguageSelect from "./pages/LanguageSelect";
import NotFound from "./pages/NotFound";

// Company Pages
import CompanyRegister from "./pages/CompanyRegister";
import CompanyCulture from "./pages/company/CompanyCulture";
import CompanyPhotosUpload from "./pages/company/CompanyPhotosUpload";
import CompanyRegisterComplete from "./pages/company/CompanyRegisterComplete";
import CompanyChat from "./pages/CompanyChat";
import CompanyResults from "./pages/company/CompanyResults";
import CandidateView from "./pages/company/CandidateView";
import SendInterviewInvitation from "./pages/company/SendInterviewInvitation";
import SavedCandidates from "./pages/company/SavedCandidates";
import TalentCards from "./pages/TalentCards";
import TalentDefinitionChat from "./pages/TalentDefinitionChat";
import ChatRoom from "./pages/ChatRoom";
import ChatList from "./pages/company/ChatList";

// Student Pages
import StudentRegister from "./pages/StudentRegister";
import PersonalityTest from "./pages/student/PersonalityTest";
import PhotoUpload from "./pages/student/PhotoUpload";
import ResumeCompletion from "./pages/student/ResumeCompletion";
import StudentDashboard from "./pages/student/StudentDashboard";
import Messages from "./pages/student/Messages";
import MockInterview from "./pages/student/MockInterview";
import MockInterviewSession from "./pages/student/MockInterviewSession";
import MockInterviewResult from "./pages/student/MockInterviewResult";
import StudentChat from "./pages/StudentChat";
import StudentChatRoom from "./pages/student/StudentChatRoom";
import JobCards from "./pages/JobCards";
import JobApplication from "./pages/JobApplication";
import AnalysisReport from "./pages/AnalysisReport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Common Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/language-select" element={<LanguageSelect />} />
          
          {/* Company Routes */}
          <Route path="/company/register" element={<CompanyRegister />} />
          <Route path="/company/culture" element={<CompanyCulture />} />
          <Route path="/company/photos-upload" element={<CompanyPhotosUpload />} />
          <Route path="/company/register-complete" element={<CompanyRegisterComplete />} />
          <Route path="/company/talent-definition" element={<TalentDefinitionChat />} />
          <Route path="/company/chat" element={<CompanyChat />} />
          <Route path="/company/results" element={<CompanyResults />} />
          <Route path="/company/candidate-view/:id?" element={<CandidateView />} />
          <Route path="/company/send-interview-invitation" element={<SendInterviewInvitation />} />
          <Route path="/company/saved-candidates" element={<SavedCandidates />} />
          <Route path="/company/talent-matching" element={<TalentCards />} />
          <Route path="/company/chat-with-candidate/:id?" element={<ChatRoom />} />
          <Route path="/company/chat-list" element={<ChatList />} />
          <Route path="/company/chat/:id" element={<ChatRoom />} />
          
          {/* Student Routes */}
          <Route path="/student/register" element={<StudentRegister />} />
          <Route path="/student/personality-test" element={<PersonalityTest />} />
          <Route path="/student/photo-upload" element={<PhotoUpload />} />
          <Route path="/student/resume-completion" element={<ResumeCompletion />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/messages" element={<Messages />} />
          <Route path="/student/mock-interview" element={<MockInterview />} />
          <Route path="/student/mock-interview-session/:moduleId" element={<MockInterviewSession />} />
          <Route path="/student/mock-interview-result/:moduleId" element={<MockInterviewResult />} />
          <Route path="/student/mock-interview/:moduleId" element={<MockInterview />} />
          <Route path="/student/chat" element={<StudentChat />} />
          <Route path="/student/job-recommendations" element={<JobCards />} />
          <Route path="/student/chat/:id" element={<StudentChatRoom />} />
          
          {/* Shared Routes */}
          <Route path="/apply/:id?" element={<JobApplication />} />
          <Route path="/analysis-report" element={<AnalysisReport />} />
          
          {/* Legacy Routes (for backward compatibility) */}
          <Route path="/student-register" element={<StudentRegister />} />
          <Route path="/company-register" element={<CompanyRegister />} />
          <Route path="/student-chat" element={<StudentChat />} />
          <Route path="/company-chat" element={<CompanyChat />} />
          <Route path="/talent-definition-chat" element={<TalentDefinitionChat />} />
          <Route path="/job-cards" element={<JobCards />} />
          <Route path="/talent-cards" element={<TalentCards />} />
          <Route path="/chat-room/:id?" element={<ChatRoom />} />
          <Route path="/company-chat-room/:id?" element={<ChatRoom />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
