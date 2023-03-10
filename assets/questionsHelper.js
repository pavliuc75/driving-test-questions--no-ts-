import questionSets from './questions/question_sets_min.json';

const questionsHelper = {
    getCategories: function () {
        return questionSets.map(q => q.category)
    },
    getQuestionSets: function () {
        return questionSets;
    },
    getRandomQuestions: function (limit = 999) {
        let questions = questionSets.flatMap(qs =>
            qs.questions.map(q => ({...q, categoryIdLiteral: qs.category.idLiteral}))
        );

        questions.sort(() => Math.random() - 0.5);

        let currentId = 1;
        let questionsWithSecondaryId = questions.map(q => {
            return {...q, secondaryId: currentId++}
        });

        return questionsWithSecondaryId.slice(0, limit);
    },
    images: {
        "1.1": {
            "5": require("./questions/1.1/5.jpg"),
            "13": require("./questions/1.1/13.jpg"),
            "14": require("./questions/1.1/14.jpg"),
        },
        "1.2": {
            "7": require("./questions/1.2/7.jpg"),
            "12": require("./questions/1.2/12.jpg"),
            "19": require("./questions/1.2/19.jpg"),
            "23": require("./questions/1.2/23.jpg"),
        },
        "2.1": {
            "1": require("./questions/2.1/1.jpg"),
            "3": require("./questions/2.1/3.jpg"),
            "4": require("./questions/2.1/4.jpg"),
            "5": require("./questions/2.1/5.jpg"),
            "6": require("./questions/2.1/6.jpg"),
            "7": require("./questions/2.1/7.jpg"),
            "8": require("./questions/2.1/8.jpg"),
            "9": require("./questions/2.1/9.jpg"),
            "10": require("./questions/2.1/10.jpg"),
            "11": require("./questions/2.1/11.jpg"),
            "12": require("./questions/2.1/12.jpg"),
            "13": require("./questions/2.1/13.jpg"),
            "14": require("./questions/2.1/14.jpg"),
            "15": require("./questions/2.1/15.jpg"),
            "16": require("./questions/2.1/16.jpg"),
            "17": require("./questions/2.1/17.jpg"),
            "18": require("./questions/2.1/18.jpg"),
            "19": require("./questions/2.1/19.jpg"),
            "20": require("./questions/2.1/20.jpg"),
            "21": require("./questions/2.1/21.jpg"),
            "22": require("./questions/2.1/22.jpg"),
            "23": require("./questions/2.1/23.jpg"),
            "24": require("./questions/2.1/24.jpg"),
            "25": require("./questions/2.1/25.jpg"),
            "26": require("./questions/2.1/26.jpg"),
            "27": require("./questions/2.1/27.jpg"),
            "28": require("./questions/2.1/28.jpg"),
            "29": require("./questions/2.1/29.jpg"),
            "30": require("./questions/2.1/30.jpg"),
            "31": require("./questions/2.1/31.jpg"),
            "32": require("./questions/2.1/32.jpg"),
            "33": require("./questions/2.1/33.jpg"),
            "34": require("./questions/2.1/34.jpg"),
            "35": require("./questions/2.1/35.jpg"),
            "36": require("./questions/2.1/36.jpg"),
            "37": require("./questions/2.1/37.jpg"),
            "38": require("./questions/2.1/38.jpg"),
            "39": require("./questions/2.1/39.jpg"),
            "40": require("./questions/2.1/40.jpg"),
            "41": require("./questions/2.1/41.jpg"),
            "42": require("./questions/2.1/42.jpg"),
            "43": require("./questions/2.1/43.jpg"),
            "44": require("./questions/2.1/44.jpg"),
            "45": require("./questions/2.1/45.jpg"),
            "46": require("./questions/2.1/46.jpg"),
        },
        "2.2": {
            "1": require("./questions/2.2/1.jpg"),
            "2": require("./questions/2.2/2.jpg"),
            "3": require("./questions/2.2/3.jpg"),
            "4": require("./questions/2.2/4.jpg"),
            "5": require("./questions/2.2/5.jpg"),
            "6": require("./questions/2.2/6.jpg"),
            "7": require("./questions/2.2/7.jpg"),
            "8": require("./questions/2.2/8.jpg"),
            "9": require("./questions/2.2/9.jpg"),
            "10": require("./questions/2.2/10.jpg"),
            "11": require("./questions/2.2/11.jpg"),
            "12": require("./questions/2.2/12.jpg"),
            "13": require("./questions/2.2/13.jpg"),
            "14": require("./questions/2.2/14.jpg"),
            "15": require("./questions/2.2/15.jpg"),
            "16": require("./questions/2.2/16.jpg"),
            "17": require("./questions/2.2/17.jpg"),
            "18": require("./questions/2.2/18.jpg"),
            "19": require("./questions/2.2/19.jpg"),
            "20": require("./questions/2.2/20.jpg"),
            "21": require("./questions/2.2/21.jpg"),
            "22": require("./questions/2.2/22.jpg"),
            "23": require("./questions/2.2/23.jpg"),
            "24": require("./questions/2.2/24.jpg"),
            "25": require("./questions/2.2/25.jpg"),
            "26": require("./questions/2.2/26.jpg"),
            "27": require("./questions/2.2/27.jpg"),
            "28": require("./questions/2.2/28.jpg"),
            "29": require("./questions/2.2/29.jpg"),
            "30": require("./questions/2.2/30.jpg"),
            "31": require("./questions/2.2/31.jpg"),
            "32": require("./questions/2.2/32.jpg"),
            "33": require("./questions/2.2/33.jpg"),
            "34": require("./questions/2.2/34.jpg"),
            "35": require("./questions/2.2/35.jpg"),
            "36": require("./questions/2.2/36.jpg"),
            "37": require("./questions/2.2/37.jpg"),
            "38": require("./questions/2.2/38.jpg"),
            "39": require("./questions/2.2/39.jpg"),
            "40": require("./questions/2.2/40.jpg"),
            "41": require("./questions/2.2/41.jpg"),
            "42": require("./questions/2.2/42.jpg"),
            "43": require("./questions/2.2/43.jpg"),
            "44": require("./questions/2.2/44.jpg"),
            "45": require("./questions/2.2/45.jpg"),
            "46": require("./questions/2.2/46.jpg"),
        },
        "2.3": {
            "1": require("./questions/2.3/1.jpg"),
            "2": require("./questions/2.3/2.jpg"),
            "3": require("./questions/2.3/3.jpg"),
            "4": require("./questions/2.3/4.jpg"),
            "5": require("./questions/2.3/5.jpg"),
            "6": require("./questions/2.3/6.jpg"),
            "7": require("./questions/2.3/7.jpg"),
            "8": require("./questions/2.3/8.jpg"),
            "9": require("./questions/2.3/9.jpg"),
            "10": require("./questions/2.3/10.jpg"),
            "11": require("./questions/2.3/11.jpg"),
            "12": require("./questions/2.3/12.jpg"),
            "13": require("./questions/2.3/13.jpg"),
            "14": require("./questions/2.3/14.jpg"),
            "15": require("./questions/2.3/15.jpg"),
            "16": require("./questions/2.3/16.jpg"),
            "17": require("./questions/2.3/17.jpg"),
            "18": require("./questions/2.3/18.jpg"),
            "19": require("./questions/2.3/19.jpg"),
            "20": require("./questions/2.3/20.jpg"),
            "21": require("./questions/2.3/21.jpg"),
            "22": require("./questions/2.3/22.jpg"),
            "23": require("./questions/2.3/23.jpg"),
            "24": require("./questions/2.3/24.jpg"),
            "25": require("./questions/2.3/25.jpg"),
            "26": require("./questions/2.3/26.jpg"),
            "27": require("./questions/2.3/27.jpg"),
            "28": require("./questions/2.3/28.jpg"),
            "29": require("./questions/2.3/29.jpg"),
            "30": require("./questions/2.3/30.jpg"),
            "31": require("./questions/2.3/31.jpg"),
            "32": require("./questions/2.3/32.jpg"),
            "33": require("./questions/2.3/33.jpg"),
            "34": require("./questions/2.3/34.jpg"),
            "35": require("./questions/2.3/35.jpg"),
            "36": require("./questions/2.3/36.jpg"),
            "37": require("./questions/2.3/37.jpg"),
            "38": require("./questions/2.3/38.jpg"),
            "39": require("./questions/2.3/39.jpg"),
            "40": require("./questions/2.3/40.jpg"),
            "41": require("./questions/2.3/41.jpg"),
            "42": require("./questions/2.3/42.jpg"),
        },
        "2.4": {
            "1": require("./questions/2.4/1.jpg"),
            "2": require("./questions/2.4/2.jpg"),
            "3": require("./questions/2.4/3.jpg"),
            "4": require("./questions/2.4/4.jpg"),
            "5": require("./questions/2.4/5.jpg"),
            "6": require("./questions/2.4/6.jpg"),
            "7": require("./questions/2.4/7.jpg"),
            "8": require("./questions/2.4/8.jpg"),
            "9": require("./questions/2.4/9.jpg"),
            "10": require("./questions/2.4/10.jpg"),
            "11": require("./questions/2.4/11.jpg"),
            "12": require("./questions/2.4/12.jpg"),
            "13": require("./questions/2.4/13.jpg"),
            "14": require("./questions/2.4/14.jpg"),
            "15": require("./questions/2.4/15.jpg"),
            "16": require("./questions/2.4/16.jpg"),
            "17": require("./questions/2.4/17.jpg"),
            "18": require("./questions/2.4/18.jpg"),
            "19": require("./questions/2.4/19.jpg"),
            "20": require("./questions/2.4/20.jpg"),
            "21": require("./questions/2.4/21.jpg"),
            "22": require("./questions/2.4/22.jpg"),
            "23": require("./questions/2.4/23.jpg"),
            "24": require("./questions/2.4/24.jpg"),
        },
        "2.5": {
            "1": require("./questions/2.5/1.jpg"),
            "2": require("./questions/2.5/2.jpg"),
            "3": require("./questions/2.5/3.jpg"),
            "4": require("./questions/2.5/4.jpg"),
            "6": require("./questions/2.5/6.jpg"),
            "7": require("./questions/2.5/7.jpg"),
            "8": require("./questions/2.5/8.jpg"),
            "9": require("./questions/2.5/9.jpg"),
            "10": require("./questions/2.5/10.jpg"),
            "12": require("./questions/2.5/12.jpg"),
            "14": require("./questions/2.5/14.jpg"),
            "15": require("./questions/2.5/15.jpg"),
            "17": require("./questions/2.5/17.jpg"),
            "18": require("./questions/2.5/18.jpg"),
            "19": require("./questions/2.5/19.jpg"),
            "21": require("./questions/2.5/21.jpg"),
            "23": require("./questions/2.5/23.jpg"),
            "25": require("./questions/2.5/25.jpg"),
            "26": require("./questions/2.5/26.jpg"),
            "27": require("./questions/2.5/27.jpg"),
            "28": require("./questions/2.5/28.jpg"),
            "29": require("./questions/2.5/29.jpg"),
            "30": require("./questions/2.5/30.jpg"),
            "31": require("./questions/2.5/31.jpg"),
            "33": require("./questions/2.5/33.jpg"),
            "34": require("./questions/2.5/34.jpg"),
            "35": require("./questions/2.5/35.jpg"),
            "36": require("./questions/2.5/36.jpg"),
            "37": require("./questions/2.5/37.jpg"),
            "38": require("./questions/2.5/38.jpg"),
            "39": require("./questions/2.5/39.jpg"),
            "40": require("./questions/2.5/40.jpg"),
            "41": require("./questions/2.5/41.jpg"),
            "42": require("./questions/2.5/42.jpg"),
            "43": require("./questions/2.5/43.jpg"),
            "45": require("./questions/2.5/45.jpg"),
            "46": require("./questions/2.5/46.jpg"),
            "47": require("./questions/2.5/47.jpg"),
        },
        "2.6": {
            "1": require("./questions/2.6/1.jpg"),
            "2": require("./questions/2.6/2.jpg"),
            "3": require("./questions/2.6/3.jpg"),
            "4": require("./questions/2.6/4.jpg"),
        },
        "3": {},
        "4.1": {
            "4": require("./questions/4.1/4.jpg"),
            "6": require("./questions/4.1/6.jpg"),
            "7": require("./questions/4.1/7.jpg"),
            "8": require("./questions/4.1/8.jpg"),
            "10": require("./questions/4.1/10.jpg"),
            "12": require("./questions/4.1/12.jpg"),
            "13": require("./questions/4.1/13.jpg"),
            "14": require("./questions/4.1/14.jpg"),
            "16": require("./questions/4.1/16.jpg"),
            "17": require("./questions/4.1/17.jpg"),
            "18": require("./questions/4.1/18.jpg"),
            "19": require("./questions/4.1/19.jpg"),
            "20": require("./questions/4.1/20.jpg"),
            "22": require("./questions/4.1/22.jpg"),
            "23": require("./questions/4.1/23.jpg"),
            "24": require("./questions/4.1/24.jpg"),
            "25": require("./questions/4.1/25.jpg"),
            "26": require("./questions/4.1/26.jpg"),
            "27": require("./questions/4.1/27.jpg"),
            "28": require("./questions/4.1/28.jpg"),
            "29": require("./questions/4.1/29.jpg"),
            "30": require("./questions/4.1/30.jpg"),
            "31": require("./questions/4.1/31.jpg"),
            "32": require("./questions/4.1/32.jpg"),
            "33": require("./questions/4.1/33.jpg"),
            "34": require("./questions/4.1/34.jpg"),
            "35": require("./questions/4.1/35.jpg"),
        },
        "4.2": {
            "1": require("./questions/4.2/1.jpg"),
            "2": require("./questions/4.2/2.jpg"),
            "3": require("./questions/4.2/3.jpg"),
            "5": require("./questions/4.2/5.jpg"),
            "6": require("./questions/4.2/6.jpg"),
            "7": require("./questions/4.2/7.jpg"),
            "8": require("./questions/4.2/8.jpg"),
            "9": require("./questions/4.2/9.jpg"),
            "10": require("./questions/4.2/10.jpg"),
            "11": require("./questions/4.2/11.jpg"),
            "12": require("./questions/4.2/12.jpg"),
            "13": require("./questions/4.2/13.jpg"),
            "14": require("./questions/4.2/14.jpg"),
            "15": require("./questions/4.2/15.jpg"),
            "16": require("./questions/4.2/16.jpg"),
        },
        "4.3": {
            "2": require("./questions/4.3/2.jpg"),
            "3": require("./questions/4.3/3.jpg"),
            "5": require("./questions/4.3/5.jpg"),
            "6": require("./questions/4.3/6.jpg"),
            "7": require("./questions/4.3/7.jpg"),
            "8": require("./questions/4.3/8.jpg"),
            "13": require("./questions/4.3/13.jpg"),
            "15": require("./questions/4.3/15.jpg"),
            "16": require("./questions/4.3/16.jpg"),
            "17": require("./questions/4.3/17.jpg"),
            "18": require("./questions/4.3/18.jpg"),
            "20": require("./questions/4.3/20.jpg"),
        },
        "4.4": {
            "2": require("./questions/4.4/2.jpg"),
            "3": require("./questions/4.4/3.jpg"),
            "4": require("./questions/4.4/4.jpg"),
            "6": require("./questions/4.4/6.jpg"),
            "7": require("./questions/4.4/7.jpg"),
            "8": require("./questions/4.4/8.jpg"),
            "9": require("./questions/4.4/9.jpg"),
            "10": require("./questions/4.4/10.jpg"),
            "11": require("./questions/4.4/11.jpg"),
            "12": require("./questions/4.4/12.jpg"),
            "13": require("./questions/4.4/13.jpg"),
            "15": require("./questions/4.4/15.jpg"),
            "16": require("./questions/4.4/16.jpg"),
            "17": require("./questions/4.4/17.jpg"),
            "18": require("./questions/4.4/18.jpg"),
            "19": require("./questions/4.4/19.jpg"),
            "20": require("./questions/4.4/20.jpg"),
            "21": require("./questions/4.4/21.jpg"),
            "22": require("./questions/4.4/22.jpg"),
            "23": require("./questions/4.4/23.jpg"),
            "24": require("./questions/4.4/24.jpg"),
        },
        "4.5.1": {
            "1": require("./questions/4.5.1/1.jpg"),
            "2": require("./questions/4.5.1/2.jpg"),
            "3": require("./questions/4.5.1/3.jpg"),
            "4": require("./questions/4.5.1/4.jpg"),
            "5": require("./questions/4.5.1/5.jpg"),
            "6": require("./questions/4.5.1/6.jpg"),
            "7": require("./questions/4.5.1/7.jpg"),
            "8": require("./questions/4.5.1/8.jpg"),
            "9": require("./questions/4.5.1/9.jpg"),
            "10": require("./questions/4.5.1/10.jpg"),
            "11": require("./questions/4.5.1/11.jpg"),
            "12": require("./questions/4.5.1/12.jpg"),
            "13": require("./questions/4.5.1/13.jpg"),
            "14": require("./questions/4.5.1/14.jpg"),
            "15": require("./questions/4.5.1/15.jpg"),
            "16": require("./questions/4.5.1/16.jpg"),
            "17": require("./questions/4.5.1/17.jpg"),
            "18": require("./questions/4.5.1/18.jpg"),
            "19": require("./questions/4.5.1/19.jpg"),
            "20": require("./questions/4.5.1/20.jpg"),
            "21": require("./questions/4.5.1/21.jpg"),
            "22": require("./questions/4.5.1/22.jpg"),
            "23": require("./questions/4.5.1/23.jpg"),
            "24": require("./questions/4.5.1/24.jpg"),
            "25": require("./questions/4.5.1/25.jpg"),
            "26": require("./questions/4.5.1/26.jpg"),
        },
        "4.5.2": {
            "1": require("./questions/4.5.2/1.jpg"),
            "2": require("./questions/4.5.2/2.jpg"),
            "3": require("./questions/4.5.2/3.jpg"),
            "4": require("./questions/4.5.2/4.jpg"),
            "5": require("./questions/4.5.2/5.jpg"),
            "6": require("./questions/4.5.2/6.jpg"),
            "7": require("./questions/4.5.2/7.jpg"),
            "8": require("./questions/4.5.2/8.jpg"),
            "9": require("./questions/4.5.2/9.jpg"),
            "10": require("./questions/4.5.2/10.jpg"),
            "11": require("./questions/4.5.2/11.jpg"),
            "12": require("./questions/4.5.2/12.jpg"),
            "13": require("./questions/4.5.2/13.jpg"),
            "14": require("./questions/4.5.2/14.jpg"),
        },
        "4.5.3": {
            "1": require("./questions/4.5.3/1.jpg"),
            "2": require("./questions/4.5.3/2.jpg"),
            "3": require("./questions/4.5.3/3.jpg"),
            "4": require("./questions/4.5.3/4.jpg"),
            "5": require("./questions/4.5.3/5.jpg"),
            "6": require("./questions/4.5.3/6.jpg"),
            "7": require("./questions/4.5.3/7.jpg"),
            "8": require("./questions/4.5.3/8.jpg"),
            "9": require("./questions/4.5.3/9.jpg"),
            "10": require("./questions/4.5.3/10.jpg"),
            "11": require("./questions/4.5.3/11.jpg"),
            "12": require("./questions/4.5.3/12.jpg"),
            "13": require("./questions/4.5.3/13.jpg"),
            "14": require("./questions/4.5.3/14.jpg"),
            "15": require("./questions/4.5.3/15.jpg"),
            "16": require("./questions/4.5.3/16.jpg"),
            "17": require("./questions/4.5.3/17.jpg"),
            "18": require("./questions/4.5.3/18.jpg"),
            "19": require("./questions/4.5.3/19.jpg"),
            "20": require("./questions/4.5.3/20.jpg"),
            "21": require("./questions/4.5.3/21.jpg"),
            "22": require("./questions/4.5.3/22.jpg"),
            "23": require("./questions/4.5.3/23.jpg"),
            "24": require("./questions/4.5.3/24.jpg"),
            "25": require("./questions/4.5.3/25.jpg"),
            "26": require("./questions/4.5.3/26.jpg"),
            "27": require("./questions/4.5.3/27.jpg"),
            "28": require("./questions/4.5.3/28.jpg"),
            "29": require("./questions/4.5.3/29.jpg"),
            "30": require("./questions/4.5.3/30.jpg"),
            "31": require("./questions/4.5.3/31.jpg"),
            "32": require("./questions/4.5.3/32.jpg"),
            "33": require("./questions/4.5.3/33.jpg"),
            "34": require("./questions/4.5.3/34.jpg"),
            "35": require("./questions/4.5.3/35.jpg"),
            "36": require("./questions/4.5.3/36.jpg"),
            "37": require("./questions/4.5.3/37.jpg"),
            "38": require("./questions/4.5.3/38.jpg"),
            "39": require("./questions/4.5.3/39.jpg"),
            "40": require("./questions/4.5.3/40.jpg"),
            "41": require("./questions/4.5.3/41.jpg"),
            "42": require("./questions/4.5.3/42.jpg"),
        },
        "4.5.4": {
            "1": require("./questions/4.5.4/1.jpg"),
            "2": require("./questions/4.5.4/2.jpg"),
            "3": require("./questions/4.5.4/3.jpg"),
            "4": require("./questions/4.5.4/4.jpg"),
            "5": require("./questions/4.5.4/5.jpg"),
            "6": require("./questions/4.5.4/6.jpg"),
            "7": require("./questions/4.5.4/7.jpg"),
            "8": require("./questions/4.5.4/8.jpg"),
            "9": require("./questions/4.5.4/9.jpg"),
            "10": require("./questions/4.5.4/10.jpg"),
            "11": require("./questions/4.5.4/11.jpg"),
            "12": require("./questions/4.5.4/12.jpg"),
            "13": require("./questions/4.5.4/13.jpg"),
            "14": require("./questions/4.5.4/14.jpg"),
            "15": require("./questions/4.5.4/15.jpg"),
            "16": require("./questions/4.5.4/16.jpg"),
            "17": require("./questions/4.5.4/17.jpg"),
            "18": require("./questions/4.5.4/18.jpg"),
            "19": require("./questions/4.5.4/19.jpg"),
            "20": require("./questions/4.5.4/20.jpg"),
            "21": require("./questions/4.5.4/21.jpg"),
            "22": require("./questions/4.5.4/22.jpg"),
            "23": require("./questions/4.5.4/23.jpg"),
            "24": require("./questions/4.5.4/24.jpg"),
            "25": require("./questions/4.5.4/25.jpg"),
            "26": require("./questions/4.5.4/26.jpg"),
            "27": require("./questions/4.5.4/27.jpg"),
            "28": require("./questions/4.5.4/28.jpg"),
            "29": require("./questions/4.5.4/29.jpg"),
            "30": require("./questions/4.5.4/30.jpg"),
            "31": require("./questions/4.5.4/31.jpg"),
            "32": require("./questions/4.5.4/32.jpg"),
            "33": require("./questions/4.5.4/33.jpg"),
            "34": require("./questions/4.5.4/34.jpg"),
            "35": require("./questions/4.5.4/35.jpg"),
            "36": require("./questions/4.5.4/36.jpg"),
            "37": require("./questions/4.5.4/37.jpg"),
            "38": require("./questions/4.5.4/38.jpg"),
            "39": require("./questions/4.5.4/39.jpg"),
        },
        "4.5.5": {
            "2": require("./questions/4.5.5/2.jpg"),
            "3": require("./questions/4.5.5/3.jpg"),
            "4": require("./questions/4.5.5/4.jpg"),
            "5": require("./questions/4.5.5/5.jpg"),
            "6": require("./questions/4.5.5/6.jpg"),
            "7": require("./questions/4.5.5/7.jpg"),
            "8": require("./questions/4.5.5/8.jpg"),
            "10": require("./questions/4.5.5/10.jpg"),
            "11": require("./questions/4.5.5/11.jpg"),
            "12": require("./questions/4.5.5/12.jpg"),
        },
        "4.6": {
            "1": require("./questions/4.6/1.jpg"),
            "3": require("./questions/4.6/3.jpg"),
            "5": require("./questions/4.6/5.jpg"),
            "6": require("./questions/4.6/6.jpg"),
            "7": require("./questions/4.6/7.jpg"),
            "8": require("./questions/4.6/8.jpg"),
            "9": require("./questions/4.6/9.jpg"),
            "10": require("./questions/4.6/10.jpg"),
            "11": require("./questions/4.6/11.jpg"),
            "12": require("./questions/4.6/12.jpg"),
            "13": require("./questions/4.6/13.jpg"),
            "14": require("./questions/4.6/14.jpg"),
            "15": require("./questions/4.6/15.jpg"),
            "18": require("./questions/4.6/18.jpg"),
            "19": require("./questions/4.6/19.jpg"),
            "20": require("./questions/4.6/20.jpg"),
            "23": require("./questions/4.6/23.jpg"),
            "24": require("./questions/4.6/24.jpg"),
            "25": require("./questions/4.6/25.jpg"),
            "27": require("./questions/4.6/27.jpg"),
            "28": require("./questions/4.6/28.jpg"),
        },
        "4.7": {
            "2": require("./questions/4.7/2.jpg"),
            "12": require("./questions/4.7/12.jpg"),
            "13": require("./questions/4.7/13.jpg"),
        },
        "4.8.1": {
            "1": require("./questions/4.8.1/1.jpg"),
            "2": require("./questions/4.8.1/2.jpg"),
            "3": require("./questions/4.8.1/3.jpg"),
            "4": require("./questions/4.8.1/4.jpg"),
            "5": require("./questions/4.8.1/5.jpg"),
            "6": require("./questions/4.8.1/6.jpg"),
        },
        "4.8.2": {
            "1": require("./questions/4.8.2/1.jpg"),
            "2": require("./questions/4.8.2/2.jpg"),
            "3": require("./questions/4.8.2/3.jpg"),
            "4": require("./questions/4.8.2/4.jpg"),
            "5": require("./questions/4.8.2/5.jpg"),
            "6": require("./questions/4.8.2/6.jpg"),
            "8": require("./questions/4.8.2/8.jpg"),
            "9": require("./questions/4.8.2/9.jpg"),
            "10": require("./questions/4.8.2/10.jpg"),
        },
        "4.9.1": {},
        "4.9.2": {},
        "4.10": {
            "3": require("./questions/4.10/3.jpg"),
            "4": require("./questions/4.10/4.jpg"),
            "8": require("./questions/4.10/8.jpg"),
            "9": require("./questions/4.10/9.jpg"),
            "10": require("./questions/4.10/10.jpg"),
            "11": require("./questions/4.10/11.jpg"),
            "13": require("./questions/4.10/13.jpg"),
            "14": require("./questions/4.10/14.jpg"),
        },
        "5.1": {
            "2": require("./questions/5.1/2.jpg"),
        },
        "5.2": {
            "4": require("./questions/5.2/4.jpg"),
        },
        "6": {},
        "7.1": {},
        "7.2": {
            "1": require("./questions/7.2/1.jpg"),
            "2": require("./questions/7.2/2.jpg"),
            "3": require("./questions/7.2/3.jpg"),
            "4": require("./questions/7.2/4.jpg"),
            "5": require("./questions/7.2/5.jpg"),
            "6": require("./questions/7.2/6.jpg"),
            "7": require("./questions/7.2/7.jpg"),
            "8": require("./questions/7.2/8.jpg"),
            "9": require("./questions/7.2/9.jpg"),
            "10": require("./questions/7.2/10.jpg"),
            "11": require("./questions/7.2/11.jpg"),
            "12": require("./questions/7.2/12.jpg"),
            "13": require("./questions/7.2/13.jpg"),
        },
        "8": {
            "4": require("./questions/8/4.jpg"),
            "7": require("./questions/8/7.jpg"),
            "9": require("./questions/8/9.jpg"),
            "12": require("./questions/8/12.jpg"),
            "13": require("./questions/8/13.jpg"),
            "14": require("./questions/8/14.jpg"),
            "26": require("./questions/8/26.jpg"),
            "27": require("./questions/8/27.jpg"),
            "31": require("./questions/8/31.jpg"),
            "35": require("./questions/8/35.jpg"),
            "37": require("./questions/8/37.jpg"),
            "39": require("./questions/8/39.jpg"),
            "43": require("./questions/8/43.jpg"),
            "57": require("./questions/8/57.jpg"),
            "58": require("./questions/8/58.jpg"),
            "61": require("./questions/8/61.jpg"),
            "66": require("./questions/8/66.jpg"),
        },
        "9": {}
    }
}

export default questionsHelper;

