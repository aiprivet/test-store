interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    variant: "primary" | "secondary";
}

export default function SortButton({ text, variant, ...rest }: ButtonProps) {
    const color = {
        primary: "blue",
        secondary: "gray",
    };

    return (
        <button
            {...rest}
            type="button"
            className={`items-center justify-center rounded-lg bg-${color[variant]}-600 px-5 py-2.5 text-sm font-medium  text-white hover:bg-${color[variant]}-800 focus:outline-none focus:ring-4 focus:ring-${color[variant]}-300 dark:bg-${color[variant]}-600 dark:hover:bg-${color[variant]}-700 dark:focus:ring-${color[variant]}-800`}
        >
            {text}
        </button>
    );
}
