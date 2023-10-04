import { navigateToHomePage } from "../scripts/navigate_to_home_page.js";
import { navigateToBlogPage } from "../scripts/navigate_to_blog_page.js";
import { openTheArticle } from "../scripts/open_the_article.js";

export function viewTheArticle() {
  navigateToHomePage();
  navigateToBlogPage();
  openTheArticle();
}
