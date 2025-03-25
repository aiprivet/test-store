interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    variant: "primary" | "secondary";
}

export default function SortButton({ text, variant, ...rest }: ButtonProps) {
    const baseClasses =
        "items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 cursor-pointer";
    const variantClasses =
        variant === "primary"
            ? "bg-blue-600 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            : "bg-neutral-600 hover:bg-neutral-800 focus:ring-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800";

    return (
        <button {...rest} type="button" className={`${baseClasses} ${variantClasses}`}>
            {text}
        </button>
    );
}