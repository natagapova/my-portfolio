const path = require('path');
module.exports = [  
    {
        mode: 'development',
        entry: './src/index.ts',    
        output: {
            filename: 'main.bundle.js',      
            path: path.resolve(__dirname, 'dist'),
        },    
        module: {
            rules: [
                {          
                    test: /\.tsx?$/,
                    use: 'ts-loader',          
                    exclude: /node_modules/,
                },      
            ],
        },    
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],    
        },
    }, 
    {
        mode: 'development',
        entry: './src/comics.ts',
        output: {      
            filename: 'other.bundle.js',
            path: path.resolve(__dirname, 'dist'),    
        },
        module: {      
            rules: [
                {          
                    test: /\.tsx?$/,
                    use: 'ts-loader',          
                    exclude: /node_modules/,
                },      
            ],
        },    
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],    
        },
    },
];