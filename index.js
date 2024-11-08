import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import {
  CheckCircle,
  Clock,
  Palette,
  Zap,
  Layout,
  Calendar,
  Search,
  Filter,
  Code,
  Workflow,
} from "lucide-react";

const ProjectDashboard = () => {
  const [selectedPriority, setSelectedPriority] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categoryData = [
    { name: "New Requirements", value: 5 },
    { name: "UI/UX Enhancements", value: 5 },
    { name: "System Enhancements", value: 4 },
    { name: "Process Automation", value: 3 },
    { name: "In Progress", value: 2 },
  ];

  const monthlyDelivery = [
    { month: "Aug", count: 7 },
    { month: "Sept", count: 6 },
    { month: "Oct", count: 4 },
  ];

  const futureDeliverables = [
    {
      name: "Centralized Control and Access Management",
      priority: "High",
      status: "Planning",
      category: "System",
      icon: Code,
    },
    {
      name: "UI UX Audit and Improvisation",
      priority: "High",
      status: "Planning",
      category: "Design",
      icon: Layout,
    },
    {
      name: "Feedbacks from Operations Team",
      priority: "Medium",
      status: "Gathering",
      category: "Research",
      icon: Search,
    },
    {
      name: "Centralized Logs Management",
      priority: "High",
      status: "Planning",
      category: "System",
      icon: Code,
    },
    {
      name: "Better User Onboarding Experience",
      priority: "Medium",
      status: "Design",
      category: "Design",
      icon: Palette,
    },
    {
      name: "Bug Fixing",
      priority: "High",
      status: "Ongoing",
      category: "Development",
      icon: Code,
    },
    {
      name: "Court Diaries V2",
      priority: "Medium",
      status: "Planning",
      category: "Feature",
      icon: Layout,
    },
    {
      name: "LM Enhancement",
      priority: "Medium",
      status: "Planning",
      category: "Feature",
      icon: Workflow,
    },
  ];

  const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#F43F5E", "#10B981"];
  const STATUS_COLORS = {
    Planning: "#8B5CF6",
    Gathering: "#60A5FA",
    Design: "#10B981",
    Ongoing: "#F43F5E",
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 border-red-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const filteredDeliverables = futureDeliverables
    .filter(
      (item) => selectedPriority === "All" || item.priority === selectedPriority
    )
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Deliverables
                </p>
                <p className="text-2xl font-bold text-indigo-600">33</p>
              </div>
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Layout className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Completed</p>
                <p className="text-2xl font-bold text-emerald-600">31</p>
              </div>
              <div className="p-3 bg-emerald-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">In Progress</p>
                <p className="text-2xl font-bold text-purple-600">2</p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:shadow-lg transition-all">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Future Items
                </p>
                <p className="text-2xl font-bold text-rose-600">
                  {futureDeliverables.length}
                </p>
              </div>
              <div className="p-3 bg-rose-100 rounded-lg">
                <Calendar className="h-6 w-6 text-rose-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="bg-white/50 backdrop-blur-sm">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="future">Future Roadmap</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/50 backdrop-blur-sm border border-gray-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  Project Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) =>
                          `${name} (${(percent * 100).toFixed(0)}%)`
                        }
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {categoryData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50 backdrop-blur-sm border border-gray-200/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart className="h-5 w-5" />
                  Monthly Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyDelivery}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#8884d8">
                        {monthlyDelivery.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="future">
          <Card className="bg-white/50 backdrop-blur-sm border border-gray-200/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Future Deliverables
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search deliverables..."
                      className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <select
                    className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onChange={(e) => setSelectedPriority(e.target.value)}
                    value={selectedPriority}
                  >
                    <option value="All">All Priorities</option>
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                  </select>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredDeliverables.map((item, index) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-indigo-100 transition-colors">
                          <ItemIcon className="h-5 w-5 text-gray-600 group-hover:text-indigo-600" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {item.name}
                          </div>
                          <div className="mt-1 flex items-center gap-2">
                            <span
                              className={`px-2 py-1 text-xs font-medium rounded border ${getPriorityColor(
                                item.priority
                              )}`}
                            >
                              {item.priority}
                            </span>
                            <span className="text-sm text-gray-500">
                              {item.category}
                            </span>
                            <span
                              className="px-2 py-1 text-xs rounded-full"
                              style={{
                                backgroundColor: `${
                                  STATUS_COLORS[item.status]
                                }20`,
                                color: STATUS_COLORS[item.status],
                              }}
                            >
                              {item.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectDashboard;
