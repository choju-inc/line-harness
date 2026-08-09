import { describe, expect, test } from 'vitest';
import { buildJourneyFollowupText } from './webinar-followups.js';

describe('buildJourneyFollowupText', () => {
  const pickerUrl = 'https://liff.line.me/123/?page=webinar&slug=demo';
  const bookingUrl = 'https://line.the-harness.com/t/booking';

  test('未予約者には回の選択を案内する', () => {
    const text = buildJourneyFollowupText(
      'picker_no_registration', 'AI導入ライブ', pickerUrl, bookingUrl,
    );
    expect(text).toContain('30分間隔');
    expect(text).toContain(pickerUrl);
    expect(text).not.toContain(bookingUrl);
  });

  test('予約後の未視聴者には次回への選び直しを案内する', () => {
    const text = buildJourneyFollowupText(
      'registered_no_show', 'AI導入ライブ', pickerUrl, bookingUrl,
    );
    expect(text).toContain('選び直せます');
    expect(text).toContain(pickerUrl);
  });

  test('フォーム回答後の未予約者には相談予約リンクだけを案内する', () => {
    const text = buildJourneyFollowupText(
      'submitted_no_booking_30m', 'AI導入ライブ', pickerUrl, bookingUrl,
    );
    expect(text).toContain('回答の送信は完了');
    expect(text).toContain(bookingUrl);
    expect(text).not.toContain(pickerUrl);
  });
});
