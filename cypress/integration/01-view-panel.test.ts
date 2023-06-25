import { e2e } from '@grafana/e2e';
import { TestIds } from '../../src/constants';

/**
 * Dashboard
 */
const json = require('../../provisioning/dashboards/home.json');
const testedPanel = json.panels[0];

/**
 * Selector
 */
const getTestIdSelector = (testId: string) => `[data-testid="${testId}"]`;

/**
 * Panel
 */
describe('Viewing an Image panel', () => {
  beforeEach(() => {
    e2e.flows.openDashboard({
      uid: json.uid,
    });
  });

  it('Should display an image', () => {
    const currentPanel = e2e.components.Panels.Panel.title(testedPanel.title);
    currentPanel.should('be.visible');

    /**
     * Root
     */
    const root = currentPanel.find(getTestIdSelector(TestIds.panel.root));
    root.should('be.visible');

    /**
     * Screenshot
     */
    root.screenshot(testedPanel.title);
    e2e().compareScreenshots({ name: testedPanel.title, threshold: 0.05 });
  });
});