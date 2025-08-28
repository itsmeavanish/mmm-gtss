"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, User, Mail, Phone, MapPin, CreditCard } from "lucide-react"

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    affiliation: "",
    designation: "",
    country: "",
    category: "",
    accommodation: "",
    dietary: "",
    paperTitle: "",
    abstract: "",
    paymentMethod: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">ICETITSC 2025 Registration</h1>
              <p className="text-blue-200 mt-2">
                International Conference on Emerging Trends in IT & Symbolic Computation
              </p>
            </div>
            <Badge className="bg-red-600 text-white px-4 py-2 text-sm font-semibold rounded-none">
              Early Bird: Save 20%
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Registration Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-none">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center gap-2">
                  <User className="w-6 h-6" />
                  Registration Form
                </CardTitle>
                <CardDescription className="text-blue-200">
                  Please fill in all required information to complete your registration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <Tabs defaultValue="personal" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 bg-white/20 rounded-none">
                    <TabsTrigger value="personal" className="rounded-none">
                      Personal
                    </TabsTrigger>
                    <TabsTrigger value="professional" className="rounded-none">
                      Professional
                    </TabsTrigger>
                    <TabsTrigger value="paper" className="rounded-none">
                      Paper
                    </TabsTrigger>
                    <TabsTrigger value="payment" className="rounded-none">
                      Payment
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="personal" className="space-y-6 mt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-white">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-none"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-white">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-none"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-none"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-white">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-none"
                          placeholder="+91 XXXXXXXXXX"
                        />
                      </div>
                      <div>
                        <Label htmlFor="country" className="text-white">
                          Country *
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("country", value)}>
                          <SelectTrigger className="bg-white/10 border-white/30 text-white rounded-none">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent className="rounded-none">
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="professional" className="space-y-6 mt-6">
                    <div>
                      <Label htmlFor="affiliation" className="text-white">
                        Institution/Organization *
                      </Label>
                      <Input
                        id="affiliation"
                        value={formData.affiliation}
                        onChange={(e) => handleInputChange("affiliation", e.target.value)}
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-none"
                        placeholder="Enter your institution name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="designation" className="text-white">
                        Designation *
                      </Label>
                      <Input
                        id="designation"
                        value={formData.designation}
                        onChange={(e) => handleInputChange("designation", e.target.value)}
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-none"
                        placeholder="Professor, Student, Researcher, etc."
                      />
                    </div>
                    <div>
                      <Label htmlFor="category" className="text-white">
                        Registration Category *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="bg-white/10 border-white/30 text-white rounded-none">
                          <SelectValue placeholder="Select registration category" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none">
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="faculty">Faculty</SelectItem>
                          <SelectItem value="industry">Industry Professional</SelectItem>
                          <SelectItem value="researcher">Researcher</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="accommodation" className="text-white">
                        Accommodation Required
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("accommodation", value)}>
                        <SelectTrigger className="bg-white/10 border-white/30 text-white rounded-none">
                          <SelectValue placeholder="Select accommodation preference" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none">
                          <SelectItem value="none">No accommodation needed</SelectItem>
                          <SelectItem value="single">Single room</SelectItem>
                          <SelectItem value="shared">Shared room</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>

                  <TabsContent value="paper" className="space-y-6 mt-6">
                    <div>
                      <Label htmlFor="paperTitle" className="text-white">
                        Paper Title
                      </Label>
                      <Input
                        id="paperTitle"
                        value={formData.paperTitle}
                        onChange={(e) => handleInputChange("paperTitle", e.target.value)}
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-none"
                        placeholder="Enter your paper title (if applicable)"
                      />
                    </div>
                    <div>
                      <Label htmlFor="abstract" className="text-white">
                        Abstract
                      </Label>
                      <Textarea
                        id="abstract"
                        value={formData.abstract}
                        onChange={(e) => handleInputChange("abstract", e.target.value)}
                        className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 rounded-none min-h-32"
                        placeholder="Enter your paper abstract (if applicable)"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="payment" className="space-y-6 mt-6">
                    <div>
                      <Label htmlFor="paymentMethod" className="text-white">
                        Payment Method *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("paymentMethod", value)}>
                        <SelectTrigger className="bg-white/10 border-white/30 text-white rounded-none">
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent className="rounded-none">
                          <SelectItem value="online">Online Payment</SelectItem>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                          <SelectItem value="dd">Demand Draft</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="bg-blue-900/30 p-6 border border-blue-400/30 rounded-none">
                      <h4 className="text-white font-semibold mb-4">Payment Instructions</h4>
                      <ul className="text-blue-200 space-y-2 text-sm">
                        <li>• Online payment via credit/debit card or net banking</li>
                        <li>• Bank transfer to provided account details</li>
                        <li>• Demand draft in favor of "ICETITSC 2025"</li>
                        <li>• Payment confirmation will be sent via email</li>
                      </ul>
                    </div>
                  </TabsContent>
                </Tabs>

                <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-none">
                  Complete Registration
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Registration Info Sidebar */}
          <div className="space-y-6">
            {/* Registration Fees */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-none">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Registration Fees
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/10 border border-white/20">
                    <span className="text-white">Students</span>
                    <span className="text-green-400 font-semibold">₹2,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 border border-white/20">
                    <span className="text-white">Faculty</span>
                    <span className="text-green-400 font-semibold">₹3,500</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 border border-white/20">
                    <span className="text-white">Industry</span>
                    <span className="text-green-400 font-semibold">₹5,000</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 border border-white/20">
                    <span className="text-white">International</span>
                    <span className="text-green-400 font-semibold">$150</span>
                  </div>
                </div>
                <div className="bg-red-900/30 p-4 border border-red-400/30">
                  <p className="text-red-200 text-sm">
                    <strong>Early Bird Discount:</strong> Register before Feb 10, 2025 and save 20%
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Conference Benefits */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-none">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  What's Included
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-blue-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Conference proceedings
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Welcome kit & certificate
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    All meals during conference
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Access to all sessions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Networking opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Cultural program
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-none">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Need Help?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-blue-200">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>icetitsc2025@mmmut.ac.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91-551-2273958</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>MMMUT, Gorakhpur, UP, India</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
