import type { Route } from "./+types/home";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="container mx-auto p-8 space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Psykiwi</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Shadcn UI Test</CardTitle>
            <CardDescription>
              Testing shadcn UI components in the home page
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This is a test card component from shadcn UI. The components are
              working correctly!
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="default">Primary Button</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Button Variants</CardTitle>
            <CardDescription>Different button styles</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card Component</CardTitle>
            <CardDescription>Fully functional card</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              This demonstrates the shadcn UI Card component with all its
              sub-components working together.
            </p>
          </CardContent>
          <CardFooter className="justify-between">
            <Button variant="outline" size="sm">
              Cancel
            </Button>
            <Button size="sm">Confirm</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Custom Override Demo</CardTitle>
            <CardDescription>
              Button with loading prop (custom feature)
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button>Normal Button</Button>
            <Button loading>Loading Button</Button>
            <Button loading variant="outline">
              Loading Outline
            </Button>
            <Button loading variant="secondary">
              Loading Secondary
            </Button>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              The loading prop is a custom extension not in shadcn
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
