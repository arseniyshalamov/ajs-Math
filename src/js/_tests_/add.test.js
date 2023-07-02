import * as ch from '../app.js';

const mag = new ch.Magician('Mag');
const daemon = new ch.Daemon('Daemon');

test('attack magician', () => {
    mag.distance = 2; mag.attack = 100;
    expect(mag.attack).toBe(90);
});
test('attack with stoned magician)', () => {
    mag.distance = 2; mag.attack = 100; mag.stoned = true;
    expect(mag.attack).toBe(85);
});
test('stoned status magician', () => {
    expect(mag.stoned).toBe(true);
});
test('attack daemon', () => {
    daemon.distance = 2; daemon.attack = 100;
    expect(daemon.attack).toBe(90);
});
test('attack with stoned daemon', () => {
    daemon.distance = 2; daemon.attack = 100; daemon.stoned = true;
    expect(daemon.attack).toBe(85);
});