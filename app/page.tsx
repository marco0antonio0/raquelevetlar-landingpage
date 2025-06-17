"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Heart,
  Shield,
  Stethoscope,
  Syringe,
  LigatureIcon as Bandage,
  TestTube,
  Phone,
  MessageCircle,
  MapPin,
  Star,
  Instagram,
  Clock,
  CheckCircle,
  Calendar,
  Home,
  Sparkles,
  Award,
  Users,
  PawPrint,
  Menu,
  X,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function VetEmCasa() {
  const [name, setName] = useState("")
  const [petName, setPetName] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const whatsappBaseUrl = "https://wa.me/5591986281517"
  const defaultMessage =
    "?text=Olá%2C%20gostaria%20de%20agendar%20um%20atendimento%20veterinário%20domiciliar%20com%20a%20dra.%20Raquel%20Aguiar."
  const colorMap: Record<string, string> = {
    emerald: "to-emerald-50/50",
    teal: "to-teal-50/50",
    cyan: "to-cyan-50/50",
    rose: "to-rose-50/50",
    orange: "to-orange-50/50",
    lime: "to-lime-50/50",
    // Adicione mais se necessário
  };
  const handleScheduling = () => {
    if (name && petName) {
      const customMessage = `?text=Olá%2C%20me%20chamo%20${encodeURIComponent(name)}%20e%20gostaria%20de%20agendar%20um%20atendimento%20veterinário%20para%20meu%20pet%20${encodeURIComponent(petName)}.`
      window.open(whatsappBaseUrl + customMessage, "_blank")
    } else {
      window.open(whatsappBaseUrl + defaultMessage, "_blank")
    }
  }

  const openWhatsApp = () => {
    window.open(whatsappBaseUrl + defaultMessage, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Floating Background Elements - More Vibrant */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-20 animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-20 animate-float-delayed blur-xl"></div>
        <div className="absolute bottom-32 left-16 w-40 h-40 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full opacity-20 animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-gradient-to-r from-green-300 to-emerald-300 rounded-full opacity-20 animate-float-delayed blur-xl"></div>
      </div>

      {/* Floating WhatsApp Button - More Vibrant */}
      <div className="fixed bottom-4 right-4 z-50">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-ping opacity-75"></div>
          <Button
            onClick={openWhatsApp}
            className="relative bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full w-14 h-14 sm:w-16 sm:h-16 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 animate-bounce"
            size="icon"
          >
            <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 animate-pulse" />
          </Button>
        </div>
      </div>

      {/* Header - More Colorful */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-xl border-b border-emerald-200 z-50 shadow-xl">
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse opacity-30"></div>
              <Heart className="relative h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-500 animate-pulse" />
              <PawPrint className="absolute -top-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 text-teal-400 animate-bounce" />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
              Vet em Casa
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <Link
              href="#sobre"
              className="text-gray-600 hover:text-emerald-500 transition-all duration-300 hover:scale-105 relative group"
            >
              Sobre
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#servicos"
              className="text-gray-600 hover:text-emerald-500 transition-all duration-300 hover:scale-105 relative group"
            >
              Serviços
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#como-funciona"
              className="text-gray-600 hover:text-emerald-500 transition-all duration-300 hover:scale-105 relative group"
            >
              Como Funciona
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#depoimentos"
              className="text-gray-600 hover:text-emerald-500 transition-all duration-300 hover:scale-105 relative group"
            >
              Depoimentos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="#contato"
              className="text-gray-600 hover:text-emerald-500 transition-all duration-300 hover:scale-105 relative group"
            >
              Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <Button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm px-3 py-2 rounded-full"
            >
              <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1 animate-pulse" />
              <span className="hidden sm:inline">Chat</span>
              <Zap className="h-3 w-3 sm:hidden animate-bounce" />
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-emerald-500 transition-all duration-300 hover:scale-110 rounded-full hover:bg-emerald-50"
            >
              {mobileMenuOpen ? <X className="h-5 w-5 animate-spin" /> : <Menu className="h-5 w-5 animate-pulse" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - More Vibrant */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gradient-to-r from-white to-emerald-50 border-t border-emerald-200 shadow-xl animate-slide-down">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              {[
                { href: "#sobre", label: "Sobre", icon: Heart },
                { href: "#servicos", label: "Serviços", icon: Stethoscope },
                { href: "#como-funciona", label: "Como Funciona", icon: Clock },
                { href: "#depoimentos", label: "Depoimentos", icon: Star },
                { href: "#contato", label: "Contato", icon: Phone },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-600 hover:text-emerald-500 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transform hover:scale-105 group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5 group-hover:animate-bounce" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section - More Dynamic */}
      <section className="pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        {/* Animated Background Elements - More Vibrant */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full animate-float opacity-30 blur-sm"></div>
          <div className="absolute top-32 right-4 sm:right-20 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full animate-float-delayed opacity-30 blur-sm"></div>
          <div className="absolute bottom-20 left-4 sm:left-20 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full animate-float opacity-30 blur-sm"></div>
          <PawPrint className="absolute top-24 right-8 sm:right-32 h-6 w-6 sm:h-10 sm:w-10 text-emerald-400 animate-bounce opacity-50" />
          <Heart className="absolute bottom-24 right-4 sm:right-16 h-5 w-5 sm:h-8 sm:w-8 text-rose-400 animate-pulse opacity-50" />
          <Sparkles className="absolute top-40 left-8 sm:left-24 h-4 w-4 sm:h-6 sm:w-6 text-yellow-400 animate-spin opacity-50" />
        </div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div
              className={`space-y-4 sm:space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div className="flex items-center space-x-2 mb-2 sm:mb-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-4 py-2 w-fit animate-pulse">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 animate-spin" />
                  <span className="text-emerald-700 font-bold text-xs sm:text-sm bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    ✨ Atendimento Premium
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                  Cuidados veterinários no{" "}
                  <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                    conforto do seu lar
                  </span>
                  <span className="inline-block animate-bounce ml-2">🏠</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                  Sou a médica veterinária{" "}
                  <span className="font-bold text-emerald-600 bg-gradient-to-r from-emerald-100 to-teal-100 px-2 py-1 rounded-lg">
                    Dra. Raquel Aguiar
                  </span>
                  . Ofereço cuidados clínicos e vacinação no conforto do seu lar, com carinho e responsabilidade.
                  <span className="inline-block animate-pulse ml-1">💚</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  onClick={openWhatsApp}
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white px-6 py-4 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-sm sm:text-base rounded-2xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Calendar className="h-5 w-5 mr-2 animate-bounce relative z-10" />
                  <span className="relative z-10">Agendar Atendimento</span>
                  <Sparkles className="h-4 w-4 ml-2 animate-spin relative z-10" />
                </Button>
                <Button
                  onClick={openWhatsApp}
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-400 text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 px-6 py-4 shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base rounded-2xl group"
                >
                  <MessageCircle className="h-5 w-5 mr-2 animate-pulse group-hover:animate-bounce" />
                  Fale via WhatsApp
                </Button>
              </div>

              <div className="grid grid-cols-1 gap-3 text-xs sm:text-sm text-gray-600">
                {[
                  { icon: CheckCircle, text: "Atendimento domiciliar", color: "emerald" },
                  { icon: CheckCircle, text: "Vacinação completa", color: "teal" },
                  { icon: CheckCircle, text: "Cuidados clínicos", color: "cyan" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 bg-gradient-to-r from-white/80 to-${item.color}-50/80 backdrop-blur-sm rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group`}
                  >
                    <item.icon
                      className={`h-4 w-4 text-${item.color}-500 animate-pulse group-hover:animate-bounce flex-shrink-0`}
                    />
                    <span className="group-hover:text-gray-800 transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"} mt-6 lg:mt-0`}
            >
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                <Image
                  src="/images/raquel-1.jpeg"
                  alt="Dra. Raquel Aguiar atendendo pet"
                  width={400}
                  height={480}
                  className="relative rounded-3xl shadow-2xl object-cover w-full h-56 sm:h-72 md:h-80 lg:h-96 transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-white to-emerald-50 p-3 rounded-2xl shadow-2xl border-2 border-emerald-200 transform hover:scale-105 transition-transform duration-300 animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-2 rounded-full animate-pulse">
                      <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">Dra. Raquel</p>
                      <p className="text-xs text-gray-500">Médica Veterinária</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-2 rounded-full shadow-lg animate-bounce">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  ⭐ 5.0
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - More Colorful */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-white via-emerald-50/30 to-teal-50/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 animate-float blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20 animate-float-delayed blur-xl"></div>
        </div>
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: Users, number: "500+", label: "Pets Atendidos", color: "emerald", emoji: "🐕" },
              { icon: Star, number: "5.0", label: "Avaliação", color: "yellow", emoji: "⭐" },
              { icon: Clock, number: "3+", label: "Anos", color: "teal", emoji: "📅" },
              { icon: Heart, number: "100%", label: "Satisfação", color: "rose", emoji: "💖" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`bg-gradient-to-r from-${stat.color}-100 via-${stat.color}-200 to-${stat.color}-100 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse`}
                >
                  <stat.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${stat.color}-600 group-hover:animate-bounce`} />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-1 group-hover:scale-110 transition-transform">
                  {stat.number}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 flex items-center justify-center gap-1">
                  <span>{stat.label}</span>
                  <span className="animate-bounce">{stat.emoji}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agendamento Rápido - More Interactive */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <PawPrint className="absolute top-6 left-4 sm:top-10 sm:left-10 h-12 w-12 sm:h-16 sm:w-16 text-emerald-300/40 animate-float" />
          <Heart className="absolute bottom-6 right-4 sm:bottom-10 sm:right-10 h-10 w-10 sm:h-14 sm:w-14 text-rose-300/40 animate-float-delayed" />
          <Sparkles className="absolute top-20 right-8 h-8 w-8 text-yellow-300/40 animate-spin" />
        </div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-white/90 via-white/95 to-emerald-50/90 backdrop-blur-xl border-2 border-emerald-200 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 transform hover:-translate-y-3 rounded-3xl overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-3 w-fit mx-auto">
                    <Sparkles className="h-5 w-5 text-emerald-600 animate-spin" />
                    <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Agendamento Rápido
                    </h3>
                    <Zap className="h-5 w-5 text-yellow-500 animate-bounce" />
                  </div>
                  <p className="text-gray-600 text-sm">
                    Preencha seus dados e agende via WhatsApp <span className="animate-pulse">📱</span>
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors flex items-center">
                      <PawPrint className="inline h-4 w-4 mr-2 animate-bounce" />
                      Seu nome
                    </label>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Digite seu nome"
                      className="w-full border-2 border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 hover:border-emerald-300 rounded-xl bg-white/80 backdrop-blur-sm"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2 group-hover:text-emerald-600 transition-colors flex items-center">
                      <Heart className="inline h-4 w-4 mr-2 animate-bounce" />
                      Nome do seu pet
                    </label>
                    <Input
                      value={petName}
                      onChange={(e) => setPetName(e.target.value)}
                      placeholder="Ex: Rex, Mimi, Thor..."
                      className="w-full border-2 border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 transition-all duration-300 hover:border-emerald-300 rounded-xl bg-white/80 backdrop-blur-sm"
                    />
                    <p className="text-xs text-gray-500 mt-1 flex items-center">
                      <span className="animate-pulse mr-1">🐾</span>
                      Digite o nome do seu companheiro de quatro patas
                    </p>
                  </div>

                  <Button
                    onClick={handleScheduling}
                    className="w-full bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 hover:from-green-600 hover:via-emerald-700 hover:to-teal-700 text-white py-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 rounded-2xl relative overflow-hidden group"
                    size="lg"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <MessageCircle className="h-5 w-5 mr-2 animate-pulse relative z-10" />
                    <span className="relative z-10 font-bold">Realizar agendamento</span>
                    <Sparkles className="h-4 w-4 ml-2 animate-spin relative z-10" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-4 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full animate-float opacity-30 blur-xl"></div>
          <div className="absolute bottom-20 left-4 sm:left-20 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full animate-float-delayed opacity-30 blur-xl"></div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <Image
                src="/images/raquel-2.jpeg"
                alt="Dra. Raquel Aguiar - Veterinária"
                width={350}
                height={420}
                className="relative rounded-3xl shadow-2xl object-cover w-full h-56 sm:h-72 md:h-80 lg:h-96 transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div>
                <div className="flex items-center space-x-2 mb-3 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-4 py-2 w-fit">
                  <Stethoscope className="h-5 w-5 text-emerald-500 animate-pulse" />
                  <span className="text-emerald-600 font-bold text-sm">Profissional Qualificada</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Conheça a{" "}
                  <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    Dra. Raquel Aguiar
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Médica Veterinária dedicada ao atendimento domiciliar, proporcionando cuidados clínicos e vacinação no
                  conforto do seu lar. Com experiência em clínica de pequenos animais, ofereço atendimento personalizado
                  com carinho e responsabilidade.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-xl hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 transform hover:scale-105">
                  <div className="bg-gradient-to-r from-emerald-100 to-emerald-200 p-2 rounded-full">
                    <Shield className="h-4 w-4 text-emerald-500 animate-pulse" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm">
                    <strong>Médica Veterinária</strong> registrada no CRMV
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-gray-800 flex items-center text-sm">
                    <Award className="h-4 w-4 mr-2 text-emerald-500" />
                    Especialidades:
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      "Clínica Médica de Pequenos Animais",
                      "Vacinação Domiciliar",
                      "Consultas Preventivas",
                      "Cuidados Gerais",
                    ].map((specialty, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors bg-white/50 p-2 rounded-lg hover:bg-emerald-50"
                      >
                        <PawPrint className="h-3 w-3 text-emerald-400 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-4 rounded-xl border border-teal-200">
                  <h3 className="font-bold text-gray-800 flex items-center mb-2 text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-teal-500 animate-bounce" />
                    Região Atendida:
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Belém e região metropolitana. Atendimento domiciliar com agendamento prévio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section
        id="servicos"
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <PawPrint className="absolute top-20 left-4 sm:left-16 h-12 w-12 sm:h-20 sm:w-20 text-emerald-200/30 animate-float" />
          <Heart className="absolute bottom-20 right-4 sm:right-16 h-10 w-10 sm:h-16 sm:w-16 text-rose-200/30 animate-float-delayed" />
          <Stethoscope className="absolute top-12 right-8 sm:right-32 h-8 w-8 sm:h-12 sm:w-12 text-cyan-200/30 animate-bounce" />
        </div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-3 w-fit mx-auto">
              <Sparkles className="h-5 w-5 text-emerald-500 animate-spin" />
              <span className="text-emerald-600 font-bold">Serviços Especializados</span>
              <Sparkles className="h-5 w-5 text-emerald-500 animate-spin" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nossos{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Serviços
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
              Oferecemos cuidados veterinários completos no conforto da sua casa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Stethoscope,
                title: "Consulta Clínica",
                description: "Exame completo, diagnóstico e orientações para manter a saúde do seu pet",
                color: "emerald",
                emoji: "🩺",
              },
              {
                icon: Syringe,
                title: "Vacinação",
                description: "Protocolo completo de vacinas para manter seu pet protegido",
                color: "teal",
                emoji: "💉",
              },
              {
                icon: Bandage,
                title: "Curativos",
                description: "Tratamento de feridas, curativos e cuidados básicos",
                color: "cyan",
                emoji: "🩹",
              },
              {
                icon: TestTube,
                title: "Coleta de Exames",
                description: "Coleta domiciliar para exames laboratoriais e diagnósticos",
                color: "emerald",
                emoji: "🧪",
              },
              {
                icon: Heart,
                title: "Cuidados Preventivos",
                description: "Acompanhamento preventivo para manter a saúde do seu pet",
                color: "teal",
                emoji: "💖",
              },
              {
                icon: Shield,
                title: "Orientações",
                description: "Orientações sobre cuidados, alimentação e bem-estar animal",
                color: "cyan",
                emoji: "🛡️",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-white/90 ${colorMap[service.color] ?? "to-gray-50/50"} backdrop-blur-md shadow-lg transform hover:-translate-y-3 hover:scale-105 rounded-2xl overflow-hidden`}
                >
                <CardContent className="p-6 text-center">
                  <div
                    className={`bg-gradient-to-r from-${service.color}-100 via-${service.color}-200 to-${service.color}-100 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative`}
                  >
                    <service.icon
                      className={`h-6 w-6 sm:h-8 sm:w-8 text-${service.color}-600 group-hover:animate-bounce`}
                    />
                    <span className="absolute -top-2 -right-2 text-lg animate-bounce">{service.emoji}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-4 sm:left-20 w-28 h-28 sm:w-40 sm:h-40 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full animate-float opacity-20 blur-xl"></div>
          <div className="absolute bottom-20 right-4 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full animate-float-delayed opacity-20 blur-xl"></div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-3 w-fit mx-auto">
              <Clock className="h-5 w-5 text-emerald-500 animate-spin" />
              <span className="text-emerald-600 font-bold">Processo Simples</span>
              <Clock className="h-5 w-5 text-emerald-500 animate-spin" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Como{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Funciona
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
              Processo simples e rápido para cuidar do seu pet
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                icon: Phone,
                title: "Entre em Contato",
                description: "Mande mensagem via WhatsApp para agendar",
                color: "emerald",
                emoji: "📱",
              },
              {
                step: "2",
                icon: Calendar,
                title: "Agendamento",
                description: "Escolhemos juntos o melhor horário para o atendimento",
                color: "teal",
                emoji: "📅",
              },
              {
                step: "3",
                icon: Home,
                title: "Atendimento",
                description: "Vou até sua casa com todos os equipamentos necessários",
                color: "cyan",
                emoji: "🏠",
              },
              {
                step: "4",
                icon: Heart,
                title: "Acompanhamento",
                description: "Mantenho contato para acompanhar a evolução do seu pet",
                color: "emerald",
                emoji: "💚",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative group">
                <div
                  className={`bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 relative`}
                >
                  {step.step}
                  <span className="absolute -top-2 -right-2 text-sm animate-bounce">{step.emoji}</span>
                </div>
                <div
                  className={`bg-gradient-to-r from-${step.color}-100 to-${step.color}-200 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <step.icon className={`h-6 w-6 sm:h-8 sm:w-8 text-${step.color}-600 group-hover:animate-bounce`} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-emerald-200 to-teal-200 -translate-y-1/2 animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section
        id="depoimentos"
        className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <Star className="absolute top-12 left-4 sm:top-20 sm:left-20 h-6 w-6 sm:h-10 sm:w-10 text-yellow-300/40 animate-pulse" />
          <Heart className="absolute bottom-12 right-4 sm:bottom-20 sm:right-20 h-8 w-8 sm:h-12 sm:w-12 text-rose-300/40 animate-bounce" />
          <PawPrint className="absolute top-24 right-8 sm:top-40 sm:right-40 h-5 w-5 sm:h-8 sm:w-8 text-emerald-300/40 animate-float" />
        </div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-6 py-3 w-fit mx-auto">
              <Star className="h-5 w-5 text-yellow-500 animate-pulse" />
              <span className="text-yellow-700 font-bold">Depoimentos</span>
              <Star className="h-5 w-5 text-yellow-500 animate-pulse" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              O que dizem os{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                tutores
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
              Depoimentos reais de quem confia no nosso trabalho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                name: "Maria Silva",
                pet: "Mel (Golden Retriever)",
                image: "/placeholder.svg?height=100&width=100",
                text: "A Dra. Raquel é uma profissional excepcional! O atendimento em casa foi fundamental para o tratamento da Mel, que ficava muito estressada no consultório.",
                rating: 5,
                emoji: "🐕",
              },
              {
                name: "João Santos",
                pet: "Mimi (Persa)",
                image: "/placeholder.svg?height=100&width=100",
                text: "Excelente profissional! A Mimi sempre foi muito arredia, mas com a Dra. Raquel fica super tranquila. O cuidado e carinho são evidentes.",
                rating: 5,
                emoji: "🐱",
              },
              {
                name: "Ana Paula",
                pet: "Thor (Labrador)",
                image: "/placeholder.svg?height=100&width=100",
                text: "Atendimento de qualidade no conforto de casa. A Dra. Raquel é muito atenciosa e sempre esclarece todas as dúvidas sobre os cuidados com o Thor.",
                rating: 5,
                emoji: "🦮",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-white/90 to-emerald-50/50 backdrop-blur-md shadow-xl border-2 border-emerald-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 rounded-2xl overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                    <span className="ml-2 text-lg animate-bounce">{testimonial.emoji}</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic text-sm">"{testimonial.text}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.pet}
                        width={50}
                        height={50}
                        className="rounded-full border-2 border-emerald-200"
                      />
                      <PawPrint className="absolute -bottom-1 -right-1 h-3 w-3 text-emerald-500 bg-white rounded-full p-1" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">Tutor(a) do {testimonial.pet}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-4 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full animate-float opacity-20 blur-xl"></div>
          <div className="absolute bottom-20 left-4 sm:left-20 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-full animate-float-delayed opacity-20 blur-xl"></div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full px-6 py-3 w-fit mx-auto">
              <MessageCircle className="h-5 w-5 text-emerald-500 animate-pulse" />
              <span className="text-emerald-600 font-bold">Fale Conosco</span>
              <MessageCircle className="h-5 w-5 text-emerald-500 animate-pulse" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Entre em{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Contato
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto">
              Estou aqui para cuidar do seu pet. Vamos conversar? <span className="animate-bounce">💬</span>
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Phone className="h-5 w-5 mr-3 text-emerald-500 animate-bounce" />
                    Informações de Contato
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-2xl hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 group transform hover:scale-105">
                      <div className="bg-gradient-to-r from-emerald-100 to-emerald-200 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle className="h-5 w-5 text-emerald-600 animate-pulse" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">WhatsApp</p>
                        <p className="text-gray-600 text-sm">(91) 98628-1517</p>
                      </div>
                      <span className="ml-auto text-lg animate-bounce">📱</span>
                    </div>

                    <div className="flex items-center space-x-4 bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-2xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300 group transform hover:scale-105">
                      <div className="bg-gradient-to-r from-pink-100 to-purple-200 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Instagram className="h-5 w-5 text-pink-600 animate-bounce" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">Instagram</p>
                        <p className="text-gray-600 text-sm">@vetemcasabelem</p>
                      </div>
                      <span className="ml-auto text-lg animate-bounce">📸</span>
                    </div>

                    <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 group transform hover:scale-105">
                      <div className="bg-gradient-to-r from-blue-100 to-cyan-200 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                        <Clock className="h-5 w-5 text-blue-600 animate-spin" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-sm">Horário de Atendimento</p>
                        <p className="text-gray-600 text-sm">Segunda a Sábado - 8h às 18h</p>
                        <p className="text-xs text-gray-500">Agendamento prévio</p>
                      </div>
                      <span className="ml-auto text-lg animate-bounce">⏰</span>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={openWhatsApp}
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 hover:from-green-600 hover:via-emerald-700 hover:to-teal-700 text-white py-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 rounded-2xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <MessageCircle className="h-5 w-5 mr-2 animate-pulse relative z-10" />
                  <span className="relative z-10 font-bold">Agendar pelo WhatsApp</span>
                  <Sparkles className="h-4 w-4 ml-2 animate-spin relative z-10" />
                </Button>
              </div>

              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <Image
                  src="/images/raquel-3.jpeg"
                  alt="Dra. Raquel Aguiar com pet"
                  width={350}
                  height={420}
                  className="relative rounded-3xl shadow-2xl object-cover w-full h-56 sm:h-72 md:h-80 lg:h-96 transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-white/95 to-emerald-50/95 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-emerald-200">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-4 w-4 text-rose-500 animate-pulse" />
                    <span className="text-sm font-bold text-gray-800">Cuidado com amor</span>
                    <span className="animate-bounce">💖</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-8 sm:py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <PawPrint className="absolute top-6 left-4 sm:top-10 sm:left-10 h-16 w-16 sm:h-24 sm:w-24 text-white/5 animate-float" />
          <Heart className="absolute bottom-6 right-4 sm:bottom-10 sm:right-10 h-12 w-12 sm:h-20 sm:w-20 text-white/5 animate-float-delayed" />
        </div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 sm:mb-6">
                <div className="relative">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-400 animate-pulse" />
                  <PawPrint className="h-3 w-3 sm:h-4 sm:w-4 text-teal-400 absolute -top-1 -right-1 animate-bounce" />
                </div>
                <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Vet em Casa
                </span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-xs sm:text-sm">
                "Cuidar com amor é a nossa missão. Cada pet merece atenção especial no conforto do seu lar."
                <span className="animate-bounce ml-1">💚</span>
              </p>
              <div className="flex space-x-3">
                <Link
                  href="https://www.instagram.com/vetemcasabelem?igsh=MWU1czNhamlvOHJieA=="
                  target="_blank"
                  className="bg-gradient-to-r from-gray-700 to-gray-600 p-3 rounded-full hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 group"
                >
                  <Instagram className="h-4 w-4 group-hover:animate-bounce" />
                </Link>
                <button
                  onClick={openWhatsApp}
                  className="bg-gradient-to-r from-gray-700 to-gray-600 p-3 rounded-full hover:from-green-500 hover:to-emerald-500 transition-all duration-300 transform hover:scale-110 group"
                >
                  <MessageCircle className="h-4 w-4 group-hover:animate-bounce" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 flex items-center">
                <Stethoscope className="h-4 w-4 mr-2 text-emerald-400 animate-pulse" />
                Serviços
              </h3>
              <ul className="space-y-2 text-gray-300 text-xs sm:text-sm">
                {[
                  { name: "Consulta Clínica", emoji: "🩺" },
                  { name: "Vacinação", emoji: "💉" },
                  { name: "Curativos", emoji: "🩹" },
                  { name: "Coleta de Exames", emoji: "🧪" },
                  { name: "Cuidados Preventivos", emoji: "💖" },
                  { name: "Orientações", emoji: "🛡️" },
                ].map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 hover:text-emerald-400 transition-colors group"
                  >
                    <PawPrint className="h-3 w-3 text-emerald-400 flex-shrink-0 group-hover:animate-bounce" />
                    <span>{service.name}</span>
                    <span className="animate-bounce">{service.emoji}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6 flex items-center">
                <Phone className="h-4 w-4 mr-2 text-emerald-400 animate-bounce" />
                Contato
              </h3>
              <div className="space-y-3 text-gray-300 text-xs sm:text-sm">
                <div className="flex items-center space-x-2 hover:text-emerald-400 transition-colors group">
                  <MessageCircle className="h-3 w-3 text-emerald-400 animate-pulse flex-shrink-0" />
                  <span>(91) 98628-1517</span>
                  <span className="group-hover:animate-bounce">📱</span>
                </div>
                <div className="flex items-center space-x-2 hover:text-emerald-400 transition-colors group">
                  <Instagram className="h-3 w-3 text-emerald-400 animate-bounce flex-shrink-0" />
                  <span>@vetemcasabelem</span>
                  <span className="group-hover:animate-bounce">📸</span>
                </div>
                <div className="flex items-start space-x-2 hover:text-emerald-400 transition-colors group">
                  <MapPin className="h-3 w-3 mt-1 text-emerald-400 animate-pulse flex-shrink-0" />
                  <span>Belém e região metropolitana</span>
                  <span className="group-hover:animate-bounce">📍</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-xs sm:text-sm">
            <p>
              &copy; 2024 Vet em Casa - Dra. Raquel Aguiar. Todos os direitos reservados.
              <span className="animate-pulse ml-2">✨</span>
            </p>
          </div>
        </div>
      </footer>
    </div>)
}
