import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:dc/nodes/index', 'Unit | Controller | dc/nodes/index', {
  // Specify the other units that are required for this test.
  needs: ['service:search', 'service:dom'],
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
