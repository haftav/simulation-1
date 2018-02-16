module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        const id = req.params.id.toLowerCase();
        if (id === 'a') {
            db.get_bins_a().then((bins) => {
                res.status(200).send(bins);
            });
        } else if (id === 'b') {
            db.get_bins_b().then((bins) => {
                res.status(200).send(bins);
            });
        } else if (id === 'c') {
            db.get_bins_c().then((bins) => {
                res.status(200).send(bins);
            });
        } else {
            db.get_bins_d().then((bins) => {
                res.status(200).send(bins);
            });
        }
    },
    getOne: (req, res) => {
        const shelf = req.params.id[0];
        const id = req.params.id[1];

        const db = req.app.get('db');

        if (shelf === 'A') {
            db.get_bin_a([id]).then((bin) => {
                res.status(200).send(bin);
            })
        } else if (shelf === 'B') {
            db.get_bin_b([id]).then((bin) => {
                res.status(200).send(bin);
            })

        } else if (shelf === 'C') {
            db.get_bin_c([id]).then((bin) => {
                res.status(200).send(bin);
            })

        } else {
            db.get_bin_d([id]).then((bin) => {
                res.status(200).send(bin);
            })

        }


    },
    create: (req, res) => {
        const shelf = req.params.id[0];
        const id = req.params.id[1];

        const db = req.app.get('db');
        const { name, price } = req.body;
        if (shelf === 'A') {
            db.add_bin_a([id, name, price]).then(() => {
                console.log('a');
                res.status(200).send();
            })
        } else if (shelf === 'B') {
            db.add_bin_b([id, name, price]).then(() => {
                console.log('b');
                res.status(200).send();    
            })
        } else if (shelf === 'C') {
            db.add_bin_c([id, name, price]).then(() => {
                console.log('c');
                res.status(200).send();    
            })
        } else {
            db.add_bin_d([id, name, price]).then(() => {
                console.log('d');
                res.status(200).send();    
            })
        }
    },
    update: (req, res) => {
        const shelf = req.params.id[0];
        const id = req.params.id[1];
        const db = req.app.get('db');
        const { name, price } = req.body;

        console.log(shelf, id, name, price);
        if (shelf === 'A') {
            db.update_bin_a([id, name, price]).then((bin) => {
                console.log('a');
                res.status(200).send(bin);
            })
        } else if (shelf === 'B') {
            db.update_bin_b([id, name, price]).then((bin) => {
                console.log('b');
                res.status(200).send(bin);    
            })
        } else if (shelf === 'C') {
            db.update_bin_c([id, name, price]).then((bin) => {
                console.log('c');
                res.status(200).send(bin);    
            })
        } else {
            db.update_bin_d([id, name, price]).then((bin) => {
                console.log('d');
                res.status(200).send(bin);    
            })
        }
    },
    delete: (req, res) => {
        const shelf = req.params.id[0];
        const id = req.params.id[1];

        const db = req.app.get('db');

        if (shelf === 'A') {
            db.delete_bin_a([id]).then(() => {
                console.log('a');
                res.status(200).send();
            })
        } else if (shelf === 'B') {
            db.delete_bin_b([id]).then(() => {
                console.log('b');
                res.status(200).send();
            })
        } else if (shelf === 'C') {
            db.delete_bin_c([id]).then(() => {
                console.log('c');
                res.status(200).send();
            })
        } else {
            db.delete_bin_d([id]).then(() => {
                console.log('d');
                res.status(200).send();
            })
        }
    }
}