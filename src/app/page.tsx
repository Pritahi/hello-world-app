'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Rocket, Code, Zap, Moon, Sun } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [count, setCount] = useState(0)

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  const isDark = typeof window !== 'undefined' ? document.documentElement.classList.contains('dark') : false

  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fast Performance",
      description: "Built with Next.js 16 for lightning-fast performance"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "TypeScript",
      description: "Fully typed for better developer experience"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Modern Stack",
      description: "Tailwind CSS + shadcn/ui components"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">user 01</span>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <Sun className="w-5 h-5 hidden dark:block" />
            <Moon className="w-5 h-5 block dark:hidden" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center gap-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 max-w-2xl">
          <Badge variant="secondary" className="px-4 py-2 text-sm">
            🎉 Welcome to user 01
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Hello World!
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            A beautiful, modern, and deploy-ready web application built with Next.js 16
          </p>
          
          {/* Interactive Counter */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setCount(Math.max(0, count - 1))}
            >
              -
            </Button>
            <div className="text-4xl font-bold min-w-[80px] text-center">
              {count}
            </div>
            <Button 
              size="lg"
              onClick={() => setCount(count + 1)}
            >
              +
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Interactive counter: Click the buttons!
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="w-full max-w-md bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-6 text-center">
            <p className="text-lg font-medium mb-4">
              Ready to build something amazing?
            </p>
            <Button size="lg" className="w-full sm:w-auto">
              <Sparkles className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Built with ❤️ by user 01 • Next.js 16 + TypeScript + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
