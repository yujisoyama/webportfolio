export function scrollToSection(section: string) {
  const element = document.getElementById(section);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
