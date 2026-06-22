import { describe, it, expect } from 'vitest';
import { content } from '../src/data/content.ts';

function hasAllKeys(obj, keys) {
  return keys.every(k => Object.hasOwn(obj, k));
}

const requiredLocaleKeys = [
  'nav', 'cta', 'hero', 'ticker', 'services', 'portfolio',
  'process', 'pricing', 'about', 'quotes', 'faq', 'ctaEnd', 'footer'
];

describe('content.ts', () => {
  it('has Spanish content', () => {
    expect(content.es).toBeDefined();
    expect(hasAllKeys(content.es, requiredLocaleKeys)).toBe(true);
  });

  it('has English content', () => {
    expect(content.en).toBeDefined();
    expect(hasAllKeys(content.en, requiredLocaleKeys)).toBe(true);
  });

  it('has matching keys in both locales', () => {
    const esKeys = Object.keys(content.es);
    const enKeys = Object.keys(content.en);
    expect(esKeys.sort()).toEqual(enKeys.sort());
  });

  it('has same number of services in both locales', () => {
    expect(content.es.services.items.length).toBe(content.en.services.items.length);
  });

  it('has same number of portfolio items in both locales', () => {
    expect(content.es.portfolio.items.length).toBe(content.en.portfolio.items.length);
  });

  it('has same number of pricing plans in both locales', () => {
    expect(content.es.pricing.plans.length).toBe(content.en.pricing.plans.length);
  });

  it('has same number of FAQ items in both locales', () => {
    expect(content.es.faq.items.length).toBe(content.en.faq.items.length);
  });
});
