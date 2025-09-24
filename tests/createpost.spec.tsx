import { test, expect } from '@playwright/test';

// Hook to run before all tests
test.beforeAll(async () => {
  console.log("Before all tests");
  // You can set up any global environment variables or configurations here
});

// Hook to run before each test (use `page` here)
test.beforeEach(async ({ page }) => {
  console.log("Before each test");
  // Prepare the page before each test runs
});

// Hook to run after each test
test.afterEach(async ({ page }) => {
  console.log("After each test");
  // Clean up after each test if needed
});