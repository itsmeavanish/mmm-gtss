"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Menu, X } from "lucide-react"

export default function ConferencePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const targetDate = new Date("2026-02-19T00:00:00")
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const fadeInUp = "opacity-0 translate-y-8 transition-all duration-1000 ease-out"
  const fadeInLeft = "opacity-0 -translate-x-8 transition-all duration-1000 ease-out"
  const fadeInRight = "opacity-0 translate-x-8 transition-all duration-1000 ease-out"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/mmmut-official-logo.png" alt="MMMUT Logo" className="w-10 h-10 object-contain" />
              </div>
              <span className="text-white font-bold text-xl">ICETITSC 2026</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Speakers", "Tracks", "Registration", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-2 transform hover:scale-105 transition-all duration-300 rounded-none">
                Register Now
              </Button>
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
          <div className="absolute inset-0 bg-[url('/abstract-technology-network-background.png')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
          <div className="animate-fade-in-up space-y-8">
            {/* Conference Logo/Badge */}
            <div className="inline-flex items-center gap-4 bg-white/25 backdrop-blur-md px-10 py-6 border border-white/40 shadow-2xl">
              <div className="w-14 h-14 overflow-hidden">
                <img src="/mmmut-logo.png" alt="MMMUT Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-3xl drop-shadow-lg">The International Conference</div>
                <div className="text-blue-100 text-2xl font-bold drop-shadow-lg">February 19-20, 2026</div>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-none">
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  ICETITSC
                </span>
              </h1>
              <div className="text-4xl md:text-5xl font-bold text-white">2026</div>
            </div>

            {/* Subtitle */}
            <div className="max-w-4xl mx-auto space-y-2">
              <p className="text-2xl md:text-3xl text-white font-light">Emerging Trends in Information Technology</p>
              <p className="text-2xl md:text-3xl text-blue-200 font-light">& Symbolic Computation</p>
            </div>

            {/* Event Details */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 border border-white/20">
                <Calendar className="w-6 h-6 text-blue-400" />
                <span className="text-white font-medium">February 19-20, 2026</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 border border-white/20">
                <MapPin className="w-6 h-6 text-red-400" />
                <span className="text-white font-medium">MMMUT, Gorakhpur, India</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-12 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl rounded-none"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold px-12 py-4 text-lg transform hover:scale-105 transition-all duration-300 bg-transparent rounded-none"
                asChild
              >
                <a href="https://mmmut.ac.in/gtss2026/papers-sub.html" target="_blank" rel="noopener noreferrer">
                  Submit Paper
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-blue-200 text-sm">Expected Papers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-blue-200 text-sm">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">7</div>
                <div className="text-blue-200 text-sm">Keynote Speakers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Conference Starts In</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-6 border border-white/20">
                  <div className="text-4xl font-bold text-white mb-2">{item.value}</div>
                  <div className="text-blue-200 text-sm uppercase tracking-wide">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Conference */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold">About Conference</Badge>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Advancing the Frontiers of
                <span className="text-blue-600"> Technology & Mathematics</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                ICETITSC-2026 brings together leading researchers, academicians, and industry professionals to explore
                cutting-edge developments in Information Technology and Symbolic Computation. Our conference focuses on
                interdisciplinary collaboration, fostering innovation in computing, AI, cryptography, data science, and
                mathematical modeling.
              </p>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-6 max-w-md">
                  <div className="text-center p-4 bg-blue-50">
                    <div className="text-3xl font-bold text-blue-600">200+</div>
                    <div className="text-sm text-gray-600">Expected Papers</div>
                  </div>
                  <div className="text-center p-4 bg-red-50">
                    <div className="text-3xl font-bold text-red-600">50+</div>
                    <div className="text-sm text-gray-600">Universities</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 transform rotate-3"></div>
              <img
                src="/college-campus.jpg"
                alt="MMMUT Campus - Beautiful illuminated university building"
                className="relative shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-4">About Us</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About MMMUT Gorakhpur</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">About the University</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Madan Mohan Malaviya University of Technology, Gorakhpur has been established in year 2013 by the
                  Government of Uttar Pradesh in the form of a non-affiliating, affiliating, teaching and research
                  University after reconstituting the Madan Mohan Malaviya Engineering College, Gorakhpur which was
                  established in 1962.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Fifty-Four batches of students have entered its portals to emerge after four years of rigorous
                  education under the tutelage of some of the most venerable teachers, engineers ready to face the world
                  and create new worlds. The University is located in the Gorakhpur-Deoria Road about 9 Km away from
                  Gorakhpur Railway Station.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  In addition to UG in Civil Engineering, Chemical Engineering, Computer Science & Engineering,
                  Mechanical Engineering, Electrical Engineering and Electronics & Communication Engineering,
                  Information Technology, University also offers MCA, BBA, MBA, M. Tech, M.Sc. and Ph.D. courses in
                  various specializations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                  IT & Computer Application Department
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  The Department of Information Technology and Computer Application (ITCA) was inaugurated on 24th
                  August 2018. The department became functional from 25th August 2018 with two PG programs - MCA and M.
                  Tech and Ph.D programme. It has also started one UG program - B.Tech. (IT) from session 2019-20.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The ITCA department aims to achieve national and international recognition through the educational and
                  research achievements of its students. The department has dedicated and highly motivated faculty
                  members who make all effective efforts to prepare the students to be successful IT professionals
                  making significant contribution to the development and growth of our nation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The department has a vast legacy of well-placed and highly reputed alumni working in India and abroad.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patron Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-4 rounded-none">
              Patron
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Patron</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Under the esteemed patronage of our Hon'ble Vice Chancellor
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg max-w-md rounded-none">
              <CardHeader>
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-none">
                  <img
                    src="/patron-prof-jp-saini-small.png"
                    alt="Prof J P Saini"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">Prof J P Saini</CardTitle>
                <Badge className="bg-blue-100 text-blue-800 mx-auto rounded-none">Patron</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Hon'ble Vice Chancellor</p>
                <p className="text-sm text-gray-500">MMMUT Gorakhpur</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Keynote Speakers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Distinguished Speakers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from world-renowned experts and thought leaders in technology and mathematics
            </p>
          </div>

          <div className="flex justify-center">
            <div className="space-y-8 max-w-6xl">
              {/* First row - 4 speakers */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    name: "Dr. Ali Ahmadian",
                    affiliation: "University Kebangsaan, Malaysia",
                    image: "/speaker-dr-ali-ahmadian.jpg",
                  },
                  {
                    name: "Prof. D. K. Lobiyal",
                    affiliation: "JNU, New Delhi",
                    image: "/speaker-prof-dk-lobiyal.jpg",
                  },
                  {
                    name: "Prof R. S. Yadav",
                    affiliation: "MNNIT, Prayagraj",
                    image: "/speaker-prof-rs-yadav.jpg",
                  },
                  {
                    name: "Prof. Aditya Trivedi",
                    affiliation: "IIIT Gwalior",
                    image: "/speaker-prof-aditya-trivedi.jpg",
                  },
                ].map((speaker, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg rounded-none"
                  >
                    <CardHeader>
                      <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-none">
                        <img
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">{speaker.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{speaker.affiliation}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Second row - 3 speakers */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Dr. Juhász Tibor",
                    affiliation: "Catholic University Hungary",
                    image: "/speaker-dr-juhasz-tibor.png",
                  },
                  {
                    name: "Prof. Shalabh",
                    affiliation: "IIT Kanpur",
                    image: "/speaker-prof-shalabh.jpg",
                  },
                  {
                    name: "Prof. R.K Sharma",
                    affiliation: "IIT, Delhi",
                    image: "/speaker-prof-rk-sharma.jpg",
                  },
                ].map((speaker, index) => (
                  <Card
                    key={index}
                    className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg rounded-none"
                  >
                    <CardHeader>
                      <div className="w-24 h-24 mx-auto mb-4 overflow-hidden rounded-none">
                        <img
                          src={speaker.image || "/placeholder.svg"}
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">{speaker.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{speaker.affiliation}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Tracks */}
      <section id="tracks" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-100 text-indigo-800 px-4 py-2 text-sm font-semibold mb-4 rounded-none">
              Conference Tracks
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore cutting-edge research across five specialized tracks
            </p>
          </div>

          <div className="flex justify-center">
            <div className="max-w-6xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {[
                  {
                    title: "Computing Systems",
                    icon: "💻",
                    topics: [
                      "Quantum Computing",
                      "High Performance Computing",
                      "Distributed & Parallel Systems",
                      "Cloud & Grid Computing",
                      "Embedded & Edge Computing",
                      "Green Computing",
                    ],
                  },
                  {
                    title: "Artificial Intelligence & Machine Learning",
                    icon: "🤖",
                    topics: [
                      "Deep Learning",
                      "Natural Language Processing",
                      "Computer Vision",
                      "Reinforcement Learning",
                      "AI Ethics & Explainability",
                      "Federated Learning",
                    ],
                  },
                  {
                    title: "Data Science & Analytics",
                    icon: "📊",
                    topics: [
                      "Big Data Analytics",
                      "Data Mining",
                      "Business Intelligence",
                      "Predictive Analytics",
                      "Data Visualization",
                      "Statistical Computing",
                    ],
                  },
                ].map((track, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg rounded-none"
                  >
                    <CardHeader>
                      <div className="text-4xl mb-4 text-center">{track.icon}</div>
                      <CardTitle className="text-xl font-bold text-gray-900">{track.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {track.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="text-sm text-gray-600 flex items-center">
                            <div className="w-2 h-2 bg-indigo-500 mr-3 flex-shrink-0 rounded-none"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center">
                <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
                  {[
                    {
                      title: "Cybersecurity & Privacy",
                      icon: "🔒",
                      topics: [
                        "Network Security",
                        "Cryptography",
                        "Privacy Preservation",
                        "Blockchain Technology",
                        "Digital Forensics",
                        "IoT Security",
                      ],
                    },
                    {
                      title: "Symbolic Computation & Mathematics",
                      icon: "🔢",
                      topics: [
                        "Computer Algebra",
                        "Symbolic Integration",
                        "Mathematical Modeling",
                        "Numerical Methods",
                        "Optimization Algorithms",
                        "Computational Geometry",
                      ],
                    },
                  ].map((track, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg rounded-none"
                    >
                      <CardHeader>
                        <div className="text-4xl mb-4 text-center">{track.icon}</div>
                        <CardTitle className="text-xl font-bold text-gray-900">{track.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {track.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="text-sm text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-indigo-500 mr-3 flex-shrink-0 rounded-none"></div>
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold mb-4">Organization</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Conference Committee</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the distinguished committee members organizing ICETITSC-2026
            </p>
          </div>

          <Tabs defaultValue="leadership" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 max-w-4xl mx-auto mb-12">
              <TabsTrigger value="leadership">Leadership</TabsTrigger>
              <TabsTrigger value="advisory">Advisory</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="organizing">Organizing</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
              <TabsTrigger value="speakers">Speakers</TabsTrigger>
            </TabsList>

            <TabsContent value="leadership">
              <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                  {[
                    {
                      name: "Prof J P Saini",
                      role: "Patron",
                      affiliation: "Hon'ble Vice Chancellor, MMMUT Gorakhpur",
                      image: "/patron-prof-jp-saini-small.png",
                    },
                    {
                      name: "Prof Shiva Prakash",
                      role: "Chairman",
                      affiliation: "MMMUT Gorakhpur",
                      image: "/committee-prof-shiva-prakash.png",
                    },
                    {
                      name: "Prof V. K. Mishra",
                      role: "Co-Chairman",
                      affiliation: "MMMUT Gorakhpur",
                      image: "/committee-prof-vk-mishra.png",
                    },
                    {
                      name: "Dr. R. K Dwivedi",
                      role: "Convenor",
                      affiliation: "MMMUT Gorakhpur",
                      image: "/committee-dr-rk-dwivedi.jpg",
                    },
                    {
                      name: "Dr. A. K. Barnwal",
                      role: "Co-Convenor",
                      affiliation: "MMMUT Gorakhpur",
                      image: "/committee-dr-ak-barnwal.jpg",
                    },
                    {
                      name: "Dr. Harish Chandra",
                      role: "Organizing Secretary",
                      affiliation: "MMMUT Gorakhpur",
                      image: "/committee-dr-harish-chandra.jpg",
                    },
                    {
                      name: "Mr. M. K. Gupta",
                      role: "Organizing Secretary",
                      affiliation: "MMMUT Gorakhpur",
                      image: "/committee-mr-mk-gupta.png",
                    },
                    {
                      name: "Ms. Kumud Patel",
                      role: "Organizing Secretary",
                      affiliation: "MMMUT Gorakhpur",
                      image: "/committee-ms-kumud-patel.jpg",
                    },
                  ].map((member, index) => (
                    <Card
                      key={index}
                      className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg rounded-none"
                    >
                      <CardHeader>
                        <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-none">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardTitle className="text-lg font-bold text-gray-900">{member.name}</CardTitle>
                        <Badge className="bg-blue-100 text-blue-800 mx-auto rounded-none">{member.role}</Badge>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">{member.affiliation}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="advisory">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-none">
                <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Advisory Committee</h3>
                <div className="flex justify-center">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-7xl">
                    {[
                      {
                        name: "Prof R K Buyya",
                        affiliation: "Melbourne University Australia",
                        image: "/advisory-prof-rk-buyya.jpg",
                      },
                      {
                        name: "Prof Manoj Misra",
                        affiliation: "IIT Roorkee",
                        image: "/advisory-prof-manoj-misra.jpg",
                      },
                      {
                        name: "Prof G R Sinha",
                        affiliation: "IISC Bangalore",
                        image: "/advisory-prof-gr-sinha.jpg",
                      },
                      {
                        name: "Prof Rajeev Srivastava",
                        affiliation: "IIT BHU",
                        image: "/advisory-prof-rajeev-srivastava.jpg",
                      },
                      {
                        name: "Prof. P. K. Mishra",
                        affiliation: "IIT BHU",
                        image: "/advisory-prof-pk-mishra.jpg",
                      },
                      {
                        name: "Prof Shekhar Verma",
                        affiliation: "IIIT Prayagraj",
                        image: "/advisory-prof-shekhar-verma.jpg",
                      },
                      {
                        name: "Prof S K Singh",
                        affiliation: "IIT BHU",
                        image: "/advisory-prof-sk-singh.jpg",
                      },
                      {
                        name: "Prof R S Yadav",
                        affiliation: "NIT Prayagraj",
                        image: "/advisory-prof-rs-yadav.jpg",
                      },
                      {
                        name: "Prof S K Singh",
                        affiliation: "IIIT Prayagraj",
                        image: "/advisory-prof-sk-singh-prayagraj.jpg",
                      },
                      {
                        name: "Prof. Nanhay Singh",
                        affiliation: "NSUT New Delhi",
                        image: "/advisory-prof-nanhay-singh.jpg",
                      },
                      {
                        name: "Prof Vivek Sahai",
                        affiliation: "University of Lucknow",
                        image: "/advisory-prof-vivek-sahai.jpg",
                      },
                      {
                        name: "Prof S. Singh",
                        affiliation: "PEC, Chandigarh",
                        image: "/advisory-prof-s-singh.jpg",
                      },
                      {
                        name: "Prof Shiv Dutt Kumar",
                        affiliation: "MNNIT Pryagra",
                        image: "/advisory-prof-shivdutt-kumar.jpg",
                      },
                      {
                        name: "Prof. K. V. Arya",
                        affiliation: "IIIT Gwalior",
                        image: "/advisory-prof-kv-arya.jpg",
                      },
                    ].map((member, index) => (
                      <div key={index} className="text-center">
                        <div className="w-20 h-20 mx-auto mb-3 overflow-hidden rounded-full border-4 border-white shadow-lg">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">{member.name}</h4>
                        <p className="text-xs text-gray-600">{member.affiliation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="technical">
              <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl">
                  {[
                    "Dr. Anurag Singh, NIT Delhi",
                    "Dr. Gaurav Barnwal, BHU Varanasi",
                    "Prof. Divakar Yadav, IGNOU New Delhi",
                    "Prof. Om Prakash, IIT Patna",
                    "Dr. Karan Singh, JNU New Delhi",
                    "Dr. Vaibhav Prakash, MNNIT Prayagraj",
                    "Dr. Ashutosh Bhatt, Uttarakhand Open University",
                    "Dr. Updendra Kumar, IET Lucknow",
                    "Dr. Rajendra Kumar, JMI New Delhi",
                    "Dr. Anil Kr. Bisht, MJP Rohilkhand University",
                    "Dr. Imran Khan, HBTI Kanpur",
                    "Dr. Hari Prabhat Gupta, IIT BHU",
                    "Dr. Saurabh Singh, BHU Varanasi",
                    "Dr. Dharmendra Mishra, MANIT Bhopal",
                    "Dr. Rakesh Chandra Joshi, Amity University Noida",
                    "Prof. Nanhay Singh, NSUT New Delhi",
                    "Dr. N. P. Singh, NIT Jalandhar",
                    "Dr. Sanjoy Das, IGNTU MP",
                    "Prof. R. S. Rao, NSUT Delhi",
                    "Dr. Anuj Kumar, MNNIT Prayagraj",
                    "Dr. Ashish Shrivastava, GLA Mathura",
                    "Dr. Awadhesh Kumar, KNIT Sultanpur",
                    "Dr. Shashank Gupta, BIET Jhansi",
                    "Dr. Ravi Sharma, Galgotias University",
                    "Dr. Vinay Gupta, Guru Teg Bahadur University",
                    "Dr. Saurabh Rana, Bennett University",
                    "Dr. Pawan Chaurasiya, BBAU Lucknow",
                    "Dr. Mukesh Awasthi, BBAU Lucknow",
                    "Dr. A. K. Verma, IIT Patna",
                  ].map((member, index) => (
                    <Card
                      key={index}
                      className="text-center hover:shadow-md transition-all duration-300 bg-white border-0 shadow-sm"
                    >
                      <CardContent className="p-4">
                        <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                          <span className="text-white font-bold text-xs">
                            {member
                              .split(",")[0]
                              .split(" ")
                              .map((n) => n.split(".").pop()[0])
                              .join("")}
                          </span>
                        </div>
                        <p className="text-xs font-medium text-gray-900">{member}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="organizing">
              <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                  {[
                    "Prof Shiva Prakash",
                    "Prof S. P. Singh",
                    "Prof U. C. Jaiswal",
                    "Dr. D.S. Singh",
                    "Dr R. K. Dwivedi",
                    "Ms. Pranjal Maurya",
                    "Ms. Prachi Verma",
                    "Mr. Manish Kr. Gupta",
                    "Ms. Kumud Patel",
                    "Prof V. K. Mishra",
                    "Dr. A. K. Barnwal",
                    "Dr. Harish Chandra",
                    "Mr. Vijay Kumar Tiwari",
                    "Ms. Preeti Singh",
                  ].map((member, index) => (
                    <Card
                      key={index}
                      className="text-center hover:shadow-lg transition-all duration-300 bg-white border-0 shadow-md"
                    >
                      <CardContent className="p-6">
                        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                          <span className="text-white font-bold text-sm">
                            {member
                              .split(" ")
                              .map((n) => n.split(".").pop()[0])
                              .join("")}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{member}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support">
              <div className="space-y-8">
                <Tabs defaultValue="publicity" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8 rounded-none">
                    <TabsTrigger value="publicity" className="rounded-none">
                      Publicity
                    </TabsTrigger>
                    <TabsTrigger value="hospitality" className="rounded-none">
                      Hospitality
                    </TabsTrigger>
                    <TabsTrigger value="transport" className="rounded-none">
                      Transport
                    </TabsTrigger>
                    <TabsTrigger value="invitation" className="rounded-none">
                      Invitation
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="publicity">
                    <div className="flex justify-center">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                        {[
                          {
                            name: "Dr. Harish Chandra",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/publicity-dr-harish-chandra.png",
                          },
                          {
                            name: "Dr. A. K. Barnwal",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/publicity-dr-ak-barnwal.png",
                          },
                          {
                            name: "Dr. Shailesh Kumar",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/publicity-dr-shailesh-kumar.png",
                          },
                          {
                            name: "Dr. Saurabh Bilgaiyan",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/publicity-dr-saurabh-bilgaiyan.png",
                          },
                          {
                            name: "Dr. Shashank Awasthi",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/publicity-dr-shashank-awasthi.png",
                          },
                          {
                            name: "Dr. Anand Mohan",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/publicity-dr-anand-mohan.png",
                          },
                        ].map((member, index) => (
                          <Card
                            key={index}
                            className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg rounded-none"
                          >
                            <CardHeader>
                              <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-none">
                                <img
                                  src={member.image || "/placeholder.svg"}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <CardTitle className="text-lg font-bold text-gray-900">{member.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-600">{member.affiliation}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="hospitality">
                    <div className="flex justify-center">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                        {[
                          {
                            name: "Dr. Shailesh Kumar",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/hospitality-dr-shailesh-kumar.png",
                          },
                          {
                            name: "Dr. Saurabh Bilgaiyan",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/hospitality-dr-saurabh-bilgaiyan.png",
                          },
                          {
                            name: "Dr. Shashank Awasthi",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/hospitality-dr-shashank-awasthi.png",
                          },
                          {
                            name: "Dr. Anand Mohan",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/hospitality-dr-anand-mohan.png",
                          },
                          {
                            name: "Dr. Harish Chandra",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/hospitality-dr-harish-chandra.png",
                          },
                          {
                            name: "Dr. A. K. Barnwal",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/hospitality-dr-ak-barnwal.png",
                          },
                        ].map((member, index) => (
                          <Card
                            key={index}
                            className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg rounded-none"
                          >
                            <CardHeader>
                              <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-none">
                                <img
                                  src={member.image || "/placeholder.svg"}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <CardTitle className="text-lg font-bold text-gray-900">{member.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-600">{member.affiliation}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="transport">
                    <div className="flex justify-center">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                        {[
                          {
                            name: "Dr. Anand Mohan",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/transport-dr-anand-mohan.png",
                          },
                          {
                            name: "Dr. Harish Chandra",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/transport-dr-harish-chandra.png",
                          },
                          {
                            name: "Dr. A. K. Barnwal",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/transport-dr-ak-barnwal.png",
                          },
                          {
                            name: "Dr. Shailesh Kumar",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/transport-dr-shailesh-kumar.png",
                          },
                          {
                            name: "Dr. Saurabh Bilgaiyan",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/transport-dr-saurabh-bilgaiyan.png",
                          },
                          {
                            name: "Dr. Shashank Awasthi",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/transport-dr-shashank-awasthi.png",
                          },
                        ].map((member, index) => (
                          <Card
                            key={index}
                            className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg rounded-none"
                          >
                            <CardHeader>
                              <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-none">
                                <img
                                  src={member.image || "/placeholder.svg"}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <CardTitle className="text-lg font-bold text-gray-900">{member.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-600">{member.affiliation}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="invitation">
                    <div className="flex justify-center">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
                        {[
                          {
                            name: "Dr. Shashank Awasthi",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/invitation-dr-shashank-awasthi.png",
                          },
                          {
                            name: "Dr. Anand Mohan",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/invitation-dr-anand-mohan.png",
                          },
                          {
                            name: "Dr. Harish Chandra",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/invitation-dr-harish-chandra.png",
                          },
                          {
                            name: "Dr. A. K. Barnwal",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/invitation-dr-ak-barnwal.png",
                          },
                          {
                            name: "Dr. Shailesh Kumar",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/invitation-dr-shailesh-kumar.png",
                          },
                          {
                            name: "Dr. Saurabh Bilgaiyan",
                            affiliation: "MMMUT Gorakhpur",
                            image: "/invitation-dr-saurabh-bilgaiyan.png",
                          },
                        ].map((member, index) => (
                          <Card
                            key={index}
                            className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white border-0 shadow-lg rounded-none"
                          >
                            <CardHeader>
                              <div className="w-16 h-16 mx-auto mb-4 overflow-hidden rounded-none">
                                <img
                                  src={member.image || "/placeholder.svg"}
                                  alt={member.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <CardTitle className="text-lg font-bold text-gray-900">{member.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-600">{member.affiliation}</p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </TabsContent>

            <TabsContent value="speakers">
              <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                  {[
                    {
                      name: "Dr. Ali Ahmadian",
                      affiliation: "University Kebangsaan, Malaysia",
                      expertise: "Mathematical Modeling",
                    },
                    { name: "Prof. D. K. Lobiyal", affiliation: "JNU New Delhi", expertise: "Computer Networks" },
                    { name: "Prof R. S. Yadav", affiliation: "MNNIT Prayagraj", expertise: "Signal Processing" },
                    { name: "Prof. Aditya Trivedi", affiliation: "IIIT Gwalior", expertise: "Machine Learning" },
                    {
                      name: "Dr. Juhász Tibor",
                      affiliation: "Catholic University Hungary",
                      expertise: "Symbolic Computation",
                    },
                    { name: "Prof. Shalabh", affiliation: "IIT Kanpur", expertise: "Statistics" },
                    { name: "Prof. R.K Sharma", affiliation: "IIT Delhi", expertise: "Computer Science" },
                  ].map((speaker, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
                    >
                      <CardHeader className="text-center pb-4">
                        <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">
                            {speaker.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {speaker.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600">{speaker.affiliation}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                          {speaker.expertise}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-shapes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 text-white px-6 py-3 text-sm font-semibold mb-6 backdrop-blur-sm rounded-none">
              Conference Roadmap
            </Badge>
            <h2 className="text-5xl font-bold text-white mb-6 text-balance">Important Dates</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto text-pretty">
              Follow our conference journey from submission to celebration
            </p>
          </div>

          <div className="relative">
            {/* Horizontal roadmap path */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 via-indigo-500 via-green-500 to-red-400"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                {
                  date: "30 Sep 2025",
                  event: "Abstract Submission Deadline",
                  status: "upcoming",
                  icon: "📝",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  date: "30 Oct 2025",
                  event: "Paper Submission Deadline",
                  status: "upcoming",
                  icon: "⏰",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  date: "21 Nov 2025",
                  event: "Notification of Acceptance",
                  status: "upcoming",
                  icon: "✅",
                  color: "from-indigo-500 to-indigo-600",
                },
                {
                  date: "1 Dec 2025",
                  event: "Registration Deadline",
                  status: "upcoming",
                  icon: "🎫",
                  color: "from-cyan-500 to-cyan-600",
                },
                {
                  date: "15 Dec 2025",
                  event: "Camera Ready Submission",
                  status: "upcoming",
                  icon: "📋",
                  color: "from-green-500 to-green-600",
                },
                {
                  date: "19-20 Feb 2026",
                  event: "Conference Dates",
                  status: "upcoming",
                  icon: "🎉",
                  color: "from-red-500 to-red-600",
                },
              ].map((item, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Roadmap node */}
                  <div
                    className={`relative z-10 w-16 h-16 bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-2xl border-4 border-white mb-4 hover:scale-110 transition-transform duration-300 rounded-none`}
                  >
                    {item.icon}
                  </div>

                  {/* Event card */}
                  <div className="bg-white/10 backdrop-blur-md p-6 border-2 border-white/20 text-center max-w-xs hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-xl rounded-none">
                    <div className="text-white font-bold text-lg mb-2 text-balance">{item.event}</div>
                    <div className="text-blue-200 text-base font-medium">{item.date}</div>
                  </div>

                  {/* Connection line for mobile */}
                  {index < 5 && (
                    <div className="md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-white/30 to-white/10"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="registration" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 text-sm font-semibold mb-4 rounded-none">
              Registration
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Registration Fees</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your registration category and secure your spot
            </p>
          </div>

          <Tabs defaultValue="indian" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12 rounded-none">
              <TabsTrigger value="indian" className="rounded-none">
                Indian Delegates
              </TabsTrigger>
              <TabsTrigger value="foreign" className="rounded-none">
                Foreign Delegates
              </TabsTrigger>
            </TabsList>

            <TabsContent value="indian">
              <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
                  {[
                    { category: "Students", fee: "₹5,000" },
                    { category: "Faculty", fee: "₹6,000" },
                    { category: "Industry", fee: "₹8,000" },
                    { category: "Participants", fee: "₹2,500" },
                  ].map((fee, index) => (
                    <Card
                      key={index}
                      className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-none"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-gray-900 text-balance break-words">
                          {fee.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-600">{fee.fee}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="foreign">
              <div className="flex justify-center">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
                  {[
                    { category: "Students", fee: "$120" },
                    { category: "Faculty", fee: "$170" },
                    { category: "Industry", fee: "$220" },
                    { category: "Participants", fee: "$70" },
                  ].map((fee, index) => (
                    <Card
                      key={index}
                      className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-none"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-gray-900">{fee.category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-green-600">{fee.fee}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Register Now Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Register Now</h2>
            <p className="text-xl text-blue-100">
              Join us for ICETITSC-2026 and be part of the technological revolution
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Registration Form */}
            <div className="bg-white p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Conference Registration</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Institution/Organization</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your institution"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Registration Category</label>
                  <select className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Select category</option>
                    <option value="student">Student (₹1,500)</option>
                    <option value="faculty">Faculty (₹3,000)</option>
                    <option value="industry">Industry (₹8,000)</option>
                    <option value="participant">Participant (₹2,500)</option>
                  </select>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 transform hover:scale-105 transition-all duration-300">
                  Register for Conference
                </Button>
              </form>
            </div>

            {/* Login Section */}
            <div className="bg-white p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Already Registered?</h3>
              <p className="text-gray-600 mb-6">Login to access your registration details and conference materials.</p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your password"
                  />
                </div>

                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 transform hover:scale-105 transition-all duration-300">
                  Login to Account
                </Button>

                <div className="text-center">
                  <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                    Forgot your password?
                  </a>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Benefits of Registration:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 mr-3"></span>
                    Access to all conference sessions
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 mr-3"></span>
                    Conference proceedings and materials
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 mr-3"></span>
                    Networking opportunities
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 mr-3"></span>
                    Certificate of participation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Places */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nearby Attractions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the rich cultural heritage and spiritual destinations around Gorakhpur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ayodhya",
                description:
                  "Sacred birthplace of Lord Rama with magnificent temples and spiritual significance (155km from college)",
                image: "/ayodhya.jpg",
              },
              {
                name: "Kushinagar",
                description:
                  "Holy Buddhist pilgrimage site where Lord Buddha attained Mahaparinirvana (60km from college)",
                image: "/kushinagar.jpg",
              },
              {
                name: "Lumbini, Nepal",
                description: "Birthplace of Lord Buddha, a UNESCO World Heritage Site (130km from college)",
                image: "/lumbini.jpg",
              },
              {
                name: "Maghar",
                description:
                  "Sacred place associated with Saint Kabir Das and his spiritual teachings (35km from college)",
                image: "/maghar.jpg",
              },
              {
                name: "Geeta Press",
                description:
                  "World's largest publisher of Hindu religious texts and spiritual literature (15km from college)",
                image: "/geeta-press.jpg",
              },
              {
                name: "Gorakhnath Temple",
                description:
                  "Ancient temple dedicated to Guru Gorakhnath, patron saint of Gorakhpur (10km from college)",
                image: "/gorakhnath-temple.jpg",
              },
            ].map((attraction, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <img
                    src={attraction.image || "/placeholder.svg"}
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{attraction.name}</h3>
                  <p className="text-gray-600">{attraction.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src="/mmmut-official-logo.png" alt="MMMUT Logo" className="w-10 h-10 object-contain" />
                </div>
                <span className="text-white font-bold text-xl">ICETITSC 2026</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                International Conference on Emerging Trends in Information Technology & Symbolic Computation
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["About Conference", "Keynote Speakers", "Conference Tracks", "Important Dates", "Registration"].map(
                  (link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div>icetitsc2026@mmmut.ac.in</div>
                <div>+91-551-2273958</div>
                <div>
                  MMMUT, Gorakhpur
                  <br />
                  Uttar Pradesh, India
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    <span className="text-sm">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 ICETITSC. All rights reserved. | Organized by MMMUT, Gorakhpur</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
