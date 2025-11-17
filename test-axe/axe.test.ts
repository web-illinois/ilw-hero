import { expect, test } from "@playwright/test";
import { axeTestFunction } from "@illinois-toolkit/ilw-core";
import AxeBuilder from '@axe-core/playwright';

test.describe("desktop variations accessibility", () => {
    test("should not have accessibility issues with desktop attributes", async ({page}, testInfo) => {
        await page.goto("./samples/variations.html", {waitUntil: "networkidle"});

        await page.waitForFunction(() => {
            const heroes = document.querySelectorAll('ilw-hero');
            return heroes.length > 0 && Array.from(heroes).every(hero => hero.shadowRoot !== null);
        }, { timeout: 30000 });

        await page.waitForTimeout(500);

        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
            .analyze();

        // Log violations in detail
        if (accessibilityScanResults.violations.length > 0) {
            console.log('\n==========================================');
            console.log(`FOUND ${accessibilityScanResults.violations.length} ACCESSIBILITY VIOLATIONS`);
            console.log('==========================================\n');

            accessibilityScanResults.violations.forEach((violation, index) => {
                console.log(`\n--- Violation ${index + 1}: ${violation.id} ---`);
                console.log(`Impact: ${violation.impact}`);
                console.log(`Description: ${violation.description}`);
                console.log(`Help: ${violation.help}`);
                console.log(`Help URL: ${violation.helpUrl}`);
                console.log(`Affected elements (${violation.nodes.length}):`);

                violation.nodes.forEach((node, nodeIndex) => {
                    console.log(`\n  Element ${nodeIndex + 1}:`);
                    console.log(`  HTML: ${node.html.substring(0, 200)}${node.html.length > 200 ? '...' : ''}`);
                    console.log(`  Target: ${node.target.join(' ')}`);
                    if (node.failureSummary) {
                        console.log(`  Failure: ${node.failureSummary}`);
                    }
                });
            });

            console.log('\n==========================================\n');
        }

        const result = await axeTestFunction(page, testInfo);

        if (!result) {
            throw new Error(
                `Found ${accessibilityScanResults.violations.length} accessibility violation(s). ` +
                `Check the console output above for details, or see the attached axe.html report.`
            );
        }

        expect(result).toBeTruthy();
    });
});

test.describe("mobile variations accessibility", () => {
    test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE size

    test("should not have accessibility issues with collapse and alwayson on mobile", async ({page}, testInfo) => {
        test.setTimeout(120000); // Mobile might need more time

        await page.goto("./samples/variations-mobile.html", {waitUntil: "networkidle"});

        await page.waitForFunction(() => {
            const heroes = document.querySelectorAll('ilw-hero');
            return heroes.length > 0 && Array.from(heroes).every(hero => hero.shadowRoot !== null);
        }, { timeout: 30000 });

        await page.waitForTimeout(500);

        const accessibilityScanResults = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
            .analyze();

        // Log violations in detail
        if (accessibilityScanResults.violations.length > 0) {
            console.log('\n==========================================');
            console.log(`FOUND ${accessibilityScanResults.violations.length} ACCESSIBILITY VIOLATIONS (MOBILE)`);
            console.log('==========================================\n');

            accessibilityScanResults.violations.forEach((violation, index) => {
                console.log(`\n--- Violation ${index + 1}: ${violation.id} ---`);
                console.log(`Impact: ${violation.impact}`);
                console.log(`Description: ${violation.description}`);
                console.log(`Help: ${violation.help}`);
                console.log(`Help URL: ${violation.helpUrl}`);
                console.log(`Affected elements (${violation.nodes.length}):`);

                violation.nodes.forEach((node, nodeIndex) => {
                    console.log(`\n  Element ${nodeIndex + 1}:`);
                    console.log(`  HTML: ${node.html.substring(0, 200)}${node.html.length > 200 ? '...' : ''}`);
                    console.log(`  Target: ${node.target.join(' ')}`);
                    if (node.failureSummary) {
                        console.log(`  Failure: ${node.failureSummary}`);
                    }
                });
            });

            console.log('\n==========================================\n');
        }

        const result = await axeTestFunction(page, testInfo);

        if (!result) {
            throw new Error(
                `Found ${accessibilityScanResults.violations.length} accessibility violation(s) on mobile. ` +
                `Check the console output above for details, or see the attached axe.html report.`
            );
        }

        expect(result).toBeTruthy();
    });
});