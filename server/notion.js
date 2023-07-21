const { Client }  = require('@notionhq/client');
require('dotenv').config();
const notion = new Client({
    auth: process.env.NOTION_KEY,
});


const getSkills = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_SKILLS_DB,
        sorts: [{
            property: 'skill_name',
            direction: 'ascending'
        }]
    })
    // console.log(response.results[0].properties)
    return response.results.map((item) => ({
        name: item.properties.skill_name.title[0].plain_text,
        icon: item.properties.icon.url ? item.properties.icon.url : ``,
    }))
}

const getRoles = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_ROLES_DB,
    })

    // console.log(response.results[0].properties.desc.rich_text)
    return response.results.map(item => ({
        name: item.properties.role_name.title[0].plain_text,
        employer: item.properties.employer.rich_text[0].plain_text,
        icon: item.properties.icon.url ? item.properties.icon.url : ``,
        start_date: item.properties.start_date.rich_text[0].plain_text,
        end_date: item.properties.end_date.rich_text[0].plain_text,
        isOngoing: item.properties.isOngoing.checkbox,
        desc: item.properties.desc.rich_text[0] ? item.properties.desc.rich_text[0].plain_text : ''
    }))
}

const getProjects = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_PROJECTS_DB,
        sorts: [{
            property: 'start_date',
            direction: 'descending'
        }]
    })
    // console.log(response.results[0].properties)
    return response.results.map(item => ({
        name: item.properties.project_name.title[0].plain_text,
        url: item.properties.url.url ? item.properties.url.url : '',
        thumbnail: item.properties.thumbnail.url ? item.properties.thumbnail.url : '',
        desc: item.properties.desc.rich_text[0].plain_text,
        isOngoing: item.properties.isOngoing.checkbox,
        tags: item.properties.tags.multi_select.map(tag => tag.name),
        start_date: item.properties.start_date.date.start,
        update_date: item.properties.update_date.date.start,
    }))
}

const getEducation = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_EDUCATION_KEY,
        sorts: [{
            property: 'start_date',
            direction: 'descending',
        }]
    })

    // console.log(response.results[0].properties)
    return response.results.map(item => ({
        name: item.properties.institution_name.title[0].plain_text,
        degree: item.properties.degree.rich_text[0].plain_text,
        course: item.properties.course.rich_text[0] ? item.properties.course.rich_text[0].plain_text : '',
        grade: item.properties.grade.rich_text[0].plain_text,
        icon: item.properties.icon.url ? item.properties.icon.url : '',
        start_date: item.properties.start_date.rich_text[0].plain_text,
        end_date: item.properties.end_date.rich_text[0].plain_text,
        isOngoing: item.properties.isOngoing.checkbox,
    }))
}

const getCerts = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_CERTS_KEY,
        sorts: [{
            property: 'rank',
            direction: 'ascending'
        }]
    })
    return response.results.map(item => ({
        name: item.properties.cert_name.title[0].plain_text,
        org_name: item.properties.org_name.rich_text[0].plain_text,
        date: item.properties.date.rich_text[0].plain_text,
        url: item.properties.url.url ? item.properties.url.url : ''
    }))
}

const getAchievements = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_ACHIEVEMENTS_KEY,
        sorts: [{
            property: 'date',
            direction: 'descending'
        }]
    })

    return response.results.map(item => ({
        name: item.properties.name.title[0].plain_text,
        desc: item.properties.desc.rich_text[0].plain_text,
        date: item.properties.date.date.start,
        url: item.properties.url.url
    }))
}

module.exports = {
    getSkills,
    getRoles,
    getProjects,
    getEducation,
    getCerts,
    getAchievements,

}