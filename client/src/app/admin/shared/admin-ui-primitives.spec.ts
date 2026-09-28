describe('Admin UI primitives', () => {
  const mounted: HTMLElement[] = [];

  function mount(className: string, tagName = 'div'): HTMLElement {
    const element = document.createElement(tagName);
    element.className = className;
    document.body.appendChild(element);
    mounted.push(element);
    return element;
  }

  afterEach(() => {
    mounted.splice(0).forEach((element) => element.remove());
  });

  it('gives admin content and surfaces generous spacing', () => {
    const content = mount('admin-page-content');
    const card = mount('admin-card');
    const section = mount('admin-dialog-section');

    expect(parseFloat(getComputedStyle(content).paddingLeft)).toBeGreaterThanOrEqual(20);
    expect(parseFloat(getComputedStyle(card).paddingLeft)).toBeGreaterThanOrEqual(20);
    expect(parseFloat(getComputedStyle(section).paddingLeft)).toBeGreaterThanOrEqual(20);
  });

  it('keeps table action buttons compact and square', () => {
    const action = mount('admin-action-btn view', 'button');
    const style = getComputedStyle(action);

    expect(style.width).toBe('34px');
    expect(style.height).toBe('34px');
  });

  it('uses the shared white detail surface', () => {
    const hero = mount('admin-detail-hero');
    const style = getComputedStyle(hero);

    expect(style.backgroundColor).toBe('rgb(255, 255, 255)');
    expect(parseFloat(style.paddingLeft)).toBeGreaterThanOrEqual(20);
  });

  it('wraps long admin values safely outside dialogs', () => {
    const value = mount('break-safe');

    expect(getComputedStyle(value).overflowWrap).toBe('anywhere');
  });
});
