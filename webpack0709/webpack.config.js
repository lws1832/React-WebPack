const path = require('path') //node.js 기본내장되있는 녀석
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const webpack  = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// import webpack from 'webpack' //여기서는 실행안된다.


module.exports ={
    name:'ingoo',
    mode:'development',//production 개발용도? //서비스용도?
    devtool:'eval',//hidden-source-map 발표?
    
    resolve:{
        extensions:['.js','.jsx']//배열로 받는이유 확장자를 여러개 받기 위해서
     // 배열로 받는애들 보통은 마지막에 ssss를 붙인다 무조건은 아님 
    },
    
    //입력받을 내용들
    entry:{
        app:['./index.jsx']
    },
    
    //모듈을 통해서 해석해야하는 내용이 있는지 검토?
    module:{
        // css또한 index.jsx 처럼 읽을 수 있게 처리부분
        
        rules:[{
            test:/\.jsx?$/, //확장자가 .jsx냐 .js냐 물어보는거?? 적합하면 안에 내용을 실행하겟다.
            loader:'babel-loader',//webpack과 babel을 이어주는 역할을 한다.
            options:{ //options   ssssssssss빼먹지말고 붙여
                presets:[ //presets ssssssssss빼먹지 말고 붙여
                    ['@babel/preset-env',{//preset-env 브라우저에 맞게 최신문법을 옛날문법으로 바꿔준다.
                        targets:{
                            browsers:['> 5% in KR','last 2 chrome versions'] 
                            //'> 5% in KR 한국 사용 통계를 사용한다 두글자로 된 국가 코드를 허용
                            // 'last 2 chrome versions 크롬 브라우저의 마지막 2개 버전'
                        },
                    }], 
                    '@babel/preset-react',
                ],
                plugins:[
                    'react-refresh/babel'
                ]
            }
        },{
            test:/\.css$/, //확장자가 어떤건지 묻는거 css다
            use:[MiniCssExtractPlugin.loader,'css-loader']  //다운 받았던 css와 style 넣어주는데 뒤에 있는거부터 실행되기 때문에
            //뒤에다가 css-loader를 넣고 앞에다 style-loader 넣는다 css가 존재해야 style 적용됨
        }]
    },
    // index.jsx 실행되거나 구동되었을때 무조건 실행되야할 녀석으로 만들겟다
    plugins:[ 
        //여기에는 객체값을 넣어주는편
        new webpackPlugin(),
        new webpack.LoaderOptionsPlugin({debug:true}), //콘솔창에 띄워주라는말
        new MiniCssExtractPlugin({ filename:'app.css' }) //한번에 묶어서 내보내 줄건데 app.css로 내보내겟다.
    ],

    // 내가 파일을 읽어서 어떻게 보내줄거냐 내보낼 내용들
    output:{
        path:path.join(__dirname,'dist'),//현재 디렉토리 + dist까지 
        filename:'app.js',
        
        // 정적파일로 변환한다.
        publicPath:'/dist/'
    },
    devServer:{
        publicPath:'/dist/',
        hot:true,
        historyApiFallback:true //새로고침 시 해당 url이 없어도 무시하고 실행
    }
}
// 자동빌드설정 
// npm i -D react-refresh
// npm i -D @pmmmwh/react-refresh-webpack-plugin
// npm i -D webpack-dev-server