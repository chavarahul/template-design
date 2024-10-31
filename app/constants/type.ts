export interface SubmitButtonProps {
    logo?: string | undefined | null;
    text: string;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    type?: "submit" | "button";
    className?: string
}