const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT deliverables.*, COUNT(tasks.id) FROM deliverables LEFT JOIN tasks ON deliverables.id = deliverable_id GROUP BY deliverables.id";
    db.query(command).then(data => {
      return res.json(data.rows);
    });
  });

  // PUT /deliverables/new
  router.put('/new', (req, res) => {
    const { name, description, priority, status, project_id } = req.body;
    const values = [name, description, priority, status, project_id];
    const command = `
      INSERT INTO deliverables (name, description, priority, status, project_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    return db.query(command, values)
      .then(data => res.send(data.rows[0]));
  });

  return router;
};

