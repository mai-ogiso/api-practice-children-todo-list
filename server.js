const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

// Allow all origins to make requests
app.use(cors());

const todoList =
    [
        {
            'list': {
                'en': 'Go to the bathroom',
                'ja': 'トイレに行く'
            },
            'schoolLevel': ['elementary', 'kindergarten'],
            //            'grade': 1,
            'time': 'morning',
            'image': 'https://1.bp.blogspot.com/-2cvgnCbNoFQ/VhHgUhjliuI/AAAAAAAAy6Y/I1xeWeydsw0/s800/toilet_kirei.png',
            'validPeriod': {
                'start': new Date('2023-04-01T00:00:00.000+09:00'), // start date in Japanese timezone
                'end': new Date('9999-12-31T00:00:00.000+09:00') // end date in Japanese timezone
            }
        },
        {
            'list': {
                'en': 'Wash your face',
                'ja': '顔を洗う'
            },
            'schoolLevel': ['elementary', 'kindergarten'],
            //            'grade': 1,
            'time': 'morning',
            'image': 'https://4.bp.blogspot.com/-RzLtft39Ais/U5hURwV97cI/AAAAAAAAhG8/Z78TtB4ZmgE/s800/sengan_boy.png',
            'validPeriod': {
                'start': new Date('2023-04-01T00:00:00.000+09:00'), // start date in Japanese timezone
                'end': new Date('9999-12-31T00:00:00.000+09:00') // end date in Japanese timezone
            }
        },
        {
            'list': {
                'en': 'Change the cloths',
                'ja': '着替える'
            },
            'schoolLevel': ['elementary', 'kindergarten'],
            //            'grade': 1,
            'time': 'morning',
            'image': 'https://1.bp.blogspot.com/-m7tOnDsT29w/XRHH4AUyUXI/AAAAAAABTXs/lWc_fl01Q849PTsDQ1sj0q0d1wuUQjyvwCLcBGAs/s800/kid_kigae_boy.png',
            'validPeriod': {
                'start': new Date('2023-04-01T00:00:00.000+09:00'), // start date in Japanese timezone
                'end': new Date('9999-12-31T00:00:00.000+09:00') // end date in Japanese timezone
            }
        },
        {
            'list': {
                'en': 'Put handkerchief and tissue in pocket',
                'ja': 'ハンカチとティッシュをポケットに入れる'
            },
            'schoolLevel': ['elementary'],
            //            'grade': 1,
            'time': 'morning',
            'image': 'https://4.bp.blogspot.com/-JiiKULzji_0/VbnRqmbTgwI/AAAAAAAAwOo/1g1JRFOVy1w/s800/pocket_tissue.png',
            'validPeriod': {
                'start': new Date('2023-04-01T00:00:00.000+09:00'), // start date in Japanese timezone
                'end': new Date('9999-12-31T00:00:00.000+09:00') // end date in Japanese timezone
            }
        },
        {
            'list': {
                'en': 'Do your homework',
                'ja': '宿題をする'
            },
            'schoolLevel': ['elementary'],
            //            'grade': 1,
            'time': 'evening',
            'image': 'https://4.bp.blogspot.com/-aQsRGok8rpg/VkLHWLkUrtI/AAAAAAAA0Vc/_yl2mG6H36k/s800/study_wakaru_boy.png',
            'validPeriod': {
                'start': new Date('2023-04-01T00:00:00.000+09:00'), // start date in Japanese timezone
                'end': new Date('9999-12-31T00:00:00.000+09:00') // end date in Japanese timezone
            }
        },
    ]



app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:school', (req, res) => {
    const school = req.params.school;

    // Filter the todoList to find the matching items
    const filteredList = todoList.filter(item => item.schoolLevel.includes(school));

    if (filteredList.length < 1) {
        // Return the filtered list as the response
        res.json({
            'list': {
                'en': 'unknown',
                'ja': 'unknown'
            },
            'schoolLevel': ['unknown'],
            'time': 'unknown',
            'image': 'unknown',
            'validPeriod': {
                'start': 'unknown',
                'end': 'unknown'
            }
        });

    } else {
        // Return the filtered list as the response
        res.json(filteredList);
    }

});


app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}!!`)
})