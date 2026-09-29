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

  it('keeps admin table cells and links on one line while the table scrolls horizontally', () => {
    const table = mount('admin-table');
    table.innerHTML = `
      <div class="ant-table-content">
        <table>
          <thead class="ant-table-thead"><tr><th>Tiêu đề rất dài</th></tr></thead>
          <tbody class="ant-table-tbody"><tr><td><a class="cell-link">Nội dung rất dài</a></td></tr></tbody>
        </table>
      </div>
    `;

    const content = table.querySelector<HTMLElement>('.ant-table-content')!;
    const header = table.querySelector<HTMLElement>('th')!;
    const cell = table.querySelector<HTMLElement>('td')!;
    const link = table.querySelector<HTMLElement>('.cell-link')!;

    expect(getComputedStyle(content).overflowX).toBe('auto');
    expect(getComputedStyle(header).whiteSpace).toBe('nowrap');
    expect(getComputedStyle(cell).whiteSpace).toBe('nowrap');
    expect(getComputedStyle(link).whiteSpace).toBe('nowrap');
  });

  it('still allows long values in admin dialogs to break safely', () => {
    const dialog = mount('admin-dialog');
    dialog.innerHTML = '<p class="break-safe">https://example.com/a-very-long-value</p>';

    const value = dialog.querySelector<HTMLElement>('.break-safe')!;
    expect(getComputedStyle(value).overflowWrap).toBe('anywhere');
  });
});
