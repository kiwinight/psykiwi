import { useEffect, useState } from "react";
import { useIsMobile } from "~/hooks/use-mobile";
import {
  BarChart3,
  Brain,
  Briefcase,
  Dna,
  Hash,
  Heart,
  Link as LinkIcon,
  Link2,
  ListChecks,
  MapPin,
  Pin,
  RefreshCw,
  Sparkles,
  MoreHorizontal,
} from "lucide-react";
import type { Route } from "./+types/$username";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Blockquote,
  Button,
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  H3,
  KiwiLogo,
  Large,
  Muted,
  Separator,
  Small,
  H4,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  CardDescription,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `@${params.username} | Psykiwi` },
    { name: "description", content: "Describe yourself in 1 link" },
  ];
}

export default function ProfilePage({ params }: Route.ComponentProps) {
  const [ctaOpen, setCtaOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggered) return;

      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);

      if (scrollPercent >= 0.5) {
        setCtaOpen(true);
        setHasTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasTriggered]);

  return (
    <div className="min-h-screen bg-[oklch(0.98_0_0)]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[oklch(0.98_0_0)]/95 backdrop-blur supports-[backdrop-filter]:bg-[oklch(0.98_0_0)]/60">
        <div className="mx-auto flex h-14 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-1.5">
            <KiwiLogo className="w-auto h-7" />
            <Large>Psykiwi</Large>
          </div>
        </div>
      </header>

      <main className="container mx-auto sm:max-w-2xl space-y-8 px-4 sm:px-0 py-8">
        {/* Profile Info */}
        <Card className="shadow-none">
          <CardContent>
            <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <H4>Alex Kwon</H4>
                  <Muted className="text-md">@alexkwon</Muted>
                </div>
                <Avatar className="size-20">
                  <AvatarImage
                    // src="https://github.com/shadcn.png"
                    alt="@alexkwon"
                  />
                  <AvatarFallback className="text-2xl">AK</AvatarFallback>
                </Avatar>
              </div>
              <Muted>
                I'm a product designer who loves exploring how people think and
                interact. Feel free to reach out!
              </Muted>
              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Seoul, Korea</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon className="h-4 w-4" />
                  <a
                    href="https://github.com/alexkwon"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/alexkwon
                  </a>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="ghost">Edit profile</Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() =>
                        navigator.clipboard.writeText(window.location.href)
                      }
                    >
                      <LinkIcon className="h-4 w-4" />
                      Copy link
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="shadow-none">
          <CardHeader className="gap-y-0">
            <CardTitle className="text-lg leading-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Summary
              </div>
            </CardTitle>

            {/* <CardDescription>
              AI generated summary based on your activities
            </CardDescription> */}
            <CardAction>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon-sm">
                    <RefreshCw className="" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  Regenerate summary using AI based on your activities
                </TooltipContent>
              </Tooltip>
            </CardAction>
          </CardHeader>
          <CardContent>
            <Blockquote className="mt-0 text-muted-foreground">
              "Alex is an energetic and curious person who thrives on new
              experiences. As an ENFP 7w8, they bring enthusiasm to everything
              they do. Their secure attachment style and high openness suggest
              someone who builds meaningful connections while constantly
              exploring new ideas."
            </Blockquote>
          </CardContent>
        </Card>

        {/* Activity Graph */}
        <Card className="shadow-none">
          <CardHeader className="gap-y-0">
            <CardTitle className="text-lg leading-8">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Activity Graph
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-20 text-sm text-muted-foreground">
                Nov 2025
              </span>
              <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary/70 rounded-full"
                  style={{ width: "50%" }}
                />
              </div>
              <span className="w-6 text-sm text-muted-foreground text-right">
                5
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-20 text-sm text-muted-foreground">
                Oct 2025
              </span>
              <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary/70 rounded-full"
                  style={{ width: "80%" }}
                />
              </div>
              <span className="w-6 text-sm text-muted-foreground text-right">
                8
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-20 text-sm text-muted-foreground">
                Sep 2025
              </span>
              <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary/70 rounded-full"
                  style={{ width: "30%" }}
                />
              </div>
              <span className="w-6 text-sm text-muted-foreground text-right">
                3
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Activities */}
        <Card className="shadow-none">
          <CardHeader className="gap-y-0">
            <CardTitle className="text-lg leading-8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ListChecks className="h-4 w-4" />
                Activities
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Pinned Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Separator className="flex-1" />
                <span>Pinned</span>
                <Separator className="flex-1" />
              </div>

              {/* MBTI Card */}
              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    MBTI
                  </CardTitle>
                  <CardAction>
                    <Pin className="h-4 w-4 text-primary" />
                  </CardAction>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Large>ENFP "The Campaigner"</Large>
                  <Muted>Energetic and creative free spirit...</Muted>
                </CardContent>
                <CardFooter className="justify-between">
                  <a
                    href="https://16personalities.com"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="h-4 w-4" />
                    16personalities.com
                  </a>
                  <Muted>Nov 29</Muted>
                </CardFooter>
              </Card>

              {/* Enneagram Card */}
              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hash className="h-4 w-4" />
                    Enneagram
                  </CardTitle>
                  <CardAction>
                    <Pin className="h-4 w-4 text-primary" />
                  </CardAction>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Large>Type 7w8 "The Enthusiast"</Large>
                  <Muted>Optimistic and versatile personality...</Muted>
                </CardContent>
                <CardFooter className="justify-between">
                  <a
                    href="https://truity.com"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="h-4 w-4" />
                    truity.com
                  </a>
                  <Muted>Oct 20</Muted>
                </CardFooter>
              </Card>

              {/* Love Language Card */}
              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-4 w-4" />
                    Love Language
                  </CardTitle>
                  <CardAction>
                    <Pin className="h-4 w-4 text-primary" />
                  </CardAction>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Large>1. Quality Time (35%)</Large>
                  <Muted>Values shared time and undivided attention...</Muted>
                </CardContent>
                <CardFooter className="justify-between">
                  <a
                    href="https://5lovelanguages.com"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="h-4 w-4" />
                    5lovelanguages.com
                  </a>
                  <Muted>Nov 28</Muted>
                </CardFooter>
              </Card>
            </div>

            {/* Nov 2025 Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Separator className="flex-1" />
                <span>Nov 2025</span>
                <Separator className="flex-1" />
              </div>

              {/* Big Five Card */}
              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Dna className="h-4 w-4" />
                    Big Five
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Large>O 78% · C 62% · E 71% · A 45% · N 38%</Large>
                  <Muted>
                    Analysis of the five major personality factors...
                  </Muted>
                </CardContent>
                <CardFooter className="justify-between">
                  <a
                    href="https://understandmyself.com"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="h-4 w-4" />
                    understandmyself.com
                  </a>
                  <Muted>Nov 25</Muted>
                </CardFooter>
              </Card>

              {/* DISC Card */}
              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    DISC
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Large>Di - Dominant/Influential</Large>
                  <Muted>
                    Assertive and influential communication style...
                  </Muted>
                </CardContent>
                <CardFooter className="justify-between">
                  <a
                    href="https://crystalknows.com"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="h-4 w-4" />
                    crystalknows.com
                  </a>
                  <Muted>Nov 20</Muted>
                </CardFooter>
              </Card>
            </div>

            {/* Oct 2025 Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Separator className="flex-1" />
                <span>Oct 2025</span>
                <Separator className="flex-1" />
              </div>

              {/* Attachment Style Card */}
              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Link2 className="h-4 w-4" />
                    Attachment Style
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Large>Secure</Large>
                  <Muted>Comfortable with intimacy, trusts others...</Muted>
                </CardContent>
                <CardFooter className="justify-between">
                  <a
                    href="https://attachmentproject.com"
                    className="flex items-center gap-1 text-sm text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkIcon className="h-4 w-4" />
                    attachmentproject.com
                  </a>
                  <Muted>Oct 15</Muted>
                </CardFooter>
              </Card>
            </div>

            {/* View more */}
            <Button variant="outline" className="w-full">
              View more
            </Button>
          </CardContent>
        </Card>
      </main>

      {/* CTA - Drawer on mobile, Dialog on desktop */}
      {isMobile ? (
        <Drawer open={ctaOpen} onOpenChange={setCtaOpen}>
          <DrawerContent>
            <DrawerHeader className="text-center">
              <KiwiLogo className="mx-auto mb-2 h-8 w-auto" />
              <DrawerTitle>Psykiwi</DrawerTitle>
              <DrawerDescription>
                Create your own personality profile
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button size="lg">Get Started</Button>
              <Muted className="text-center">
                Already have an account?{" "}
                <a href="/login" className="text-primary hover:underline">
                  Sign in
                </a>
              </Muted>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        <Dialog open={ctaOpen} onOpenChange={setCtaOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader className="text-center">
              <KiwiLogo className="mx-auto mb-2 h-8 w-auto" />
              <DialogTitle>Psykiwi</DialogTitle>
              <DialogDescription>
                Create your own personality profile
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex-col gap-2 sm:flex-col">
              <Button size="lg" className="w-full">
                Get Started
              </Button>
              <Muted className="text-center">
                Already have an account?{" "}
                <a href="/login" className="text-primary hover:underline">
                  Sign in
                </a>
              </Muted>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
