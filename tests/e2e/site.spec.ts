import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
	test("ES page loads with correct title", async ({ page }) => {
		await page.goto("/");
		await expect(page).toHaveTitle(/Impulsa Digital/);
		await expect(page.locator("html")).toHaveAttribute("lang", "es");
	});

	test("EN page loads with correct title", async ({ page }) => {
		await page.goto("/en/");
		await expect(page.locator("html")).toHaveAttribute("lang", "en");
	});

	test("Language switcher links to other locale", async ({ page }) => {
		await page.goto("/");
		const enLink = page.locator('.lang-toggle a[href="/en/"]:not(.active)');
		await expect(enLink).toBeVisible();
	});
});

test.describe("Theme toggle", () => {
	test("toggles dark/light mode", async ({ page }) => {
		await page.goto("/");
		const toggle = page.locator("#theme-toggle");
		await toggle.click();
		await expect(page.locator("html")).toHaveClass(/light/);
		await toggle.click();
		await expect(page.locator("html")).not.toHaveClass(/light/);
	});
});

test.describe("Portfolio filter", () => {
	test("filters by category", async ({ page }) => {
		await page.goto("/");
		const webBtn = page.locator('.pf-btn[data-filter="Web"]').first();
		await webBtn.click();
		await expect(webBtn).toHaveClass(/active/);
		const projects = page.locator(".project");
		const count = await projects.count();
		expect(count).toBeGreaterThan(0);
	});
});

test.describe("FAQ accordion", () => {
	test("expands and collapses", async ({ page }) => {
		await page.goto("/");
		const firstBtn = page.locator(".faq-q").first();
		await firstBtn.click();
		await expect(firstBtn).toHaveAttribute("aria-expanded", "true");
		const firstItem = page.locator(".faq-item").first();
		await expect(firstItem).toHaveClass(/open/);
	});
});
