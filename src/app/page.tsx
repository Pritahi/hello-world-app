'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Moon, Sun, Sparkles, Code2, Rocket, Github } from 'lucide-react'

// Helper to get initial theme (only runs on client)
function getInitialTheme(): boolean {
  if (typeof window === 'undefined') return false
  const theme = localStorage.getItem('theme')
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
    return true
  }
  return false
}

export default function Home() {
  const [isDark, setIsDark] = useState(getInitialTheme)

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const newTheme = !prev
      if (newTheme) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
      return newTheme
    })
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="w-full px-4 py-4 flex justify-between items-center border-b border-border/50 backdrop-blur-sm bg-background/50 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <Code2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-semibold text-lg">user 01</span>
        </div>
        <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full space-y-8">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Welcome to the Future</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Hello World
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              A beautiful, modern web application built with Next.js 16, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <Rocket className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg">Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Lightning fast performance with Next.js 16</CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <Code2 className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg">Modern</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Built with latest TypeScript & React</CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <Sparkles className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg">Beautiful</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Stunning UI with shadcn/ui components</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Tech Stack */}
          <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-xl">Tech Stack</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="px-3 py-1">Next.js 16</Badge>
                <Badge variant="secondary" className="px-3 py-1">TypeScript</Badge>
                <Badge variant="secondary" className="px-3 py-1">Tailwind CSS</Badge>
                <Badge variant="secondary" className="px-3 py-1">shadcn/ui</Badge>
                <Badge variant="secondary" className="px-3 py-1">Prisma</Badge>
                <Badge variant="secondary" className="px-3 py-1">SQLite</Badge>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="flex justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Github className="w-5 h-5" />
              View on GitHub
            </Button>
            <Button size="lg" variant="outline">
              Get Started
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full px-4 py-6 border-t border-border/50 bg-background/50 backdrop-blur-sm mt-auto">
        <div className="max-w-2xl mx-auto text-center text-sm text-muted-foreground">
          <p>Built with ❤️ by user 01</p>
        </div>
      </footer>
    </div>
  )
}
