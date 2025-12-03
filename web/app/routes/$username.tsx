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
  CardContent,
  KiwiLogo,
  Large,
  Muted,
  Separator,
  H4,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
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

      <main className="container mx-auto sm:max-w-2xl px-4 sm:px-0 py-8">
        {/* Unified Profile Card */}
        <Card className="shadow-none">
          <CardContent className="space-y-6">
            {/* Profile Info Section */}
            <div className="space-y-3">
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
              <div className="text-sm">
                I'm a product designer who loves exploring how people think and
                interact. Feel free to reach out!
              </div>
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

            <Separator className="-mx-6 !w-[calc(100%+3rem)]" />

            {/* Summary Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Large className="flex items-center gap-2 font-semibold">
                  <Sparkles className="h-4 w-4" />
                  Summary
                </Large>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon-sm">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Regenerate summary using AI based on your activities
                  </TooltipContent>
                </Tooltip>
              </div>
              <Blockquote className="text-sm">
                "Alex is an energetic and curious person who thrives on new
                experiences. As an ENFP 7w8, they bring enthusiasm to everything
                they do. Their secure attachment style and high openness suggest
                someone who builds meaningful connections while constantly
                exploring new ideas."
              </Blockquote>
            </div>

            <Separator className="-mx-6 !w-[calc(100%+3rem)]" />

            {/* Pinned Activities Section */}
            <div className="space-y-0">
              <Large className="flex items-center gap-2 font-semibold">
                <Pin className="h-4 w-4" />
                Pinned activities
              </Large>

              <div className="space-y-0">
                {/* MBTI */}
                <div className="space-y-2 py-6">
                  <div className="flex items-center gap-2 font-semibold">
                    <Brain className="h-4 w-4" />
                    MBTI
                  </div>
                  <div className="font-semibold">ENFP "The Campaigner"</div>
                  <Muted>Energetic and creative free spirit...</Muted>
                  <div className="flex items-center justify-between pt-2">
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
                  </div>
                </div>

                <Separator />

                {/* Enneagram */}
                <div className="space-y-2 py-6">
                  <div className="flex items-center gap-2 font-semibold">
                    <Hash className="h-4 w-4" />
                    Enneagram
                  </div>
                  <div className="font-semibold">Type 7w8 "The Enthusiast"</div>
                  <Muted>Optimistic and versatile personality...</Muted>
                  <div className="flex items-center justify-between pt-2">
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
                  </div>
                </div>

                <Separator />

                {/* Love Language */}
                <div className="space-y-2 py-6">
                  <div className="flex items-center gap-2 font-semibold">
                    <Heart className="h-4 w-4" />
                    Love Language
                  </div>
                  <div className="font-semibold">1. Quality Time (35%)</div>
                  <Muted>Values shared time and undivided attention...</Muted>
                  <div className="flex items-center justify-between pt-2">
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
                  </div>
                </div>
              </div>
            </div>

            <Separator className="-mx-6 !w-[calc(100%+3rem)]" />

            {/* Activities Section */}
            <div className="space-y-0">
              <Large className="flex items-center gap-2 font-semibold">
                <ListChecks className="h-4 w-4" />
                Activities
              </Large>

              <div className="space-y-0">
                {/* Big Five */}
                <div className="space-y-2 py-6">
                  <div className="flex items-center gap-2 font-semibold">
                    <Dna className="h-4 w-4" />
                    Big Five
                  </div>
                  <div className="font-semibold">
                    O 78% · C 62% · E 71% · A 45% · N 38%
                  </div>
                  <Muted>
                    Analysis of the five major personality factors...
                  </Muted>
                  <div className="flex items-center justify-between pt-2">
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
                  </div>
                </div>

                <Separator />

                {/* DISC */}
                <div className="space-y-2 py-6">
                  <div className="flex items-center gap-2 font-semibold">
                    <Briefcase className="h-4 w-4" />
                    DISC
                  </div>
                  <div className="font-semibold">Di - Dominant/Influential</div>
                  <Muted>
                    Assertive and influential communication style...
                  </Muted>
                  <div className="flex items-center justify-between pt-2">
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
                  </div>
                </div>

                <Separator />

                {/* Attachment Style */}
                <div className="space-y-2 py-6">
                  <div className="flex items-center gap-2 font-semibold">
                    <Link2 className="h-4 w-4" />
                    Attachment Style
                  </div>
                  <div className="font-semibold">Secure</div>
                  <Muted>Comfortable with intimacy, trusts others...</Muted>
                  <div className="flex items-center justify-between pt-2">
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
                  </div>
                </div>

                {/* View more */}
                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    View more
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
