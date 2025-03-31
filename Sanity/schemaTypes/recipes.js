export default {
    name: 'recipes',
    type: 'document',
    title: 'Recipes',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Recipe Name'
        },
        {
            name: 'picture',
            type: 'image',
            title: 'Picture'
        },
        {
            name: 'ingredients',
            type: 'array',
            title: 'Ingredients',
            of: [{ type: 'ingredient' }], // Use the ingredient type in an array
        },
        {
            name: 'instructions',
            type: 'string',
            title: 'Instructions'
        },
        {
            name: 'source',
            type: 'string',
            title: 'Source'
        }

    ]
};