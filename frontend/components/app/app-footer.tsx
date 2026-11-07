export async function AppFooter() {
  "use cache";

  return (
    <footer className="border-t px-4 py-4 text-sm text-muted-foreground">
      &copy; {new Date().getFullYear()} Benedetto
    </footer>
  );
}
