// Instantiate router - DO NOT MODIFY
const express = require('express');
const router = express.Router();

/**
 * BASIC PHASE 2, Step A - Instantiate SQLite and database
 *   - Database file: "data_source" environment variable
 *   - Database permissions: read/write records in tables
 */
// Your code here
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(
  process.env.data_source,
  sqlite3.OPEN_READWRITE
);
/**
 * BASIC PHASE 2, Step B - List of all trees in the database
 *
 * Protocol: GET
 * Path: /
 * Parameters: None
 * Response: JSON array of objects
 *   - Object properties: height-ft, tree, id
 *   - Ordered by the height_ft from tallest to shortest
 */
// Your code here
router.get('/', (req, res, next) => {
  let query = 'select id, tree, height_ft from trees order by height_ft desc';
  const params = [];

  db.all(query, params, (err, rows) => {
    if (err) {
      next(err);
    } else {
      //   res.set('Content-Type', 'application/json');
      res.status(200).json(rows);
    }
  });
});
/**
 * BASIC PHASE 3 - Retrieve one tree with the matching id
 *
 * Path: /:id
 * Protocol: GET
 * Parameter: id
 * Response: JSON Object
 *   - Properties: id, tree, location, height_ft, ground_circumference_ft
 */
// Your code here
router.get('/:id', (req, res, next) => {
  const params = [req.params.id];
  let query = 'select id, tree, location, height_ft from trees where id = ?';
  db.get(query, params, (err, row) => {
    if (err) {
      next(err);
    } else {
      if (row) {
        res.json(row);
      } else {
        let error = new Error('id does not exist');

        next(error);
      }
    }
  });
});

/**
 * INTERMEDIATE PHASE 4 - INSERT tree row into the database
 *
 * Path: /trees
 * Protocol: POST
 * Parameters: None
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here
router.post('/', (req, res, next) => {
  let { id, tree, location, height_ft, ground_circumference_ft } = req.body;
  let query;
  let params;
  if (id) {
    params = [id, tree, location, height_ft, ground_circumference_ft];
    query =
      'insert into trees (id,tree, location, height_ft, ground_circumference_ft) values(?,?,?,?,?)';
  } else {
    params = [tree, location, height_ft, ground_circumference_ft];
    query =
      'insert into trees (tree, location, height_ft, ground_circumference_ft) values(?,?,?,?)';
  }

  db.run(query, params, (err) => {
    if (err) {
      next(err);
    } else {
      res.status(201).json({
        message: `inserted ${tree} successfully`,
      });
    }
  });
});
/**
 * INTERMEDIATE PHASE 5 - DELETE a tree row from the database
 *
 * Path: /trees/:id
 * Protocol: DELETE
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here
router.delete('/:id', (req, res, next) => {
  const treeId = req.params.id;

  db.run('DELETE FROM trees WHERE id = ?', [treeId], function (err) {
    if (err) {
      next(err);
    } else if (this.changes === 0) {
      let err = new Error(`Tree with id = ${treeId} not found`);
      err.status = 400;
      next(err);
    } else {
      res.json({
        message: `Tree with ID ${treeId} deleted.`,
      });
    }
  });
});

/**
 * INTERMEDIATE PHASE 6 - UPDATE a tree row in the database
 *
 * Path: /trees/:id
 * Protocol: PUT
 * Parameter: id
 * Response: JSON Object
 *   - Property: message
 *   - Value: success
 */
// Your code here
router.put('/:id', (req, res, next) => {
  let treeId = req.params.id;
  let { tree, location, height_ft, ground_circumference_ft } = req.body;
  let params = [tree, location, height_ft, ground_circumference_ft, treeId];
  let query =
    'update trees set tree = ?,location = ?, height_ft = ?, ground_circumference_ft = ? where id = ?';
  db.run(query, params, (err) => {
    if (err) {
      next(err);
    } else if (this.changes === 0) {
      let err = new Error(`Tree with id = ${treeId} not found`);
      err.status = 400;
      next(err);
    } else {
      res.json({
        message: `Tree with ID ${treeId} updated.`,
      });
    }
  });
});

// Export class - DO NOT MODIFY
module.exports = router;
