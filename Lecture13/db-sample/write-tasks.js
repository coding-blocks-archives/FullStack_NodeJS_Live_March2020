const Sequelize = require('sequelize')

const db = new Sequelize({
    // mysql
    dialect: 'mysql',
    database: 'sampledb22',
    username: 'sampleuser22',
    password: 'samplepass22',
    
    // sqlite
    // dialect: 'sqlite',
    // storage: __dirname + '/tasks.db'
})

// Tasks is my model
const Tasks = db.define('task', {
    // here we define columns
    id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.DataTypes.STRING(140),
        allowNull: false
    },
    done: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
    }
})

async function task () {
    await db.sync()
    await Tasks.create({ title: 'Some task to be done'})

    await Tasks.bulkCreate([
        {title: 'This is task 1'},
        {title: 'This is task 2'},
        {title: 'This is task 3'},
        {title: 'This is task 4'},
        {title: 'This is task 5'},
        {title: 'This is task 6'},
    ])

    const tasks = await Tasks.findAll();
    console.log('tasks found = ', tasks.length)

    tasks.forEach((t) => {
        console.log(`${t.id} \t ${t.done} \t ${t.title}`)
    })
}

task()