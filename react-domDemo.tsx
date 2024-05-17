import React, { useState,useRef } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import WebView from 'react-native-webview';

 const content = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <title>react-dom</title>
        </head>
        <script>
                window.document.addEventListener('message',function (event){
                    if(JSON.parse(event.data).a == 1){
                        messageContainer.innerHTML += '<li>增加li标签DOM节点</li>'
                    }else if(JSON.parse(event.data).a == 2){
                        messageContainer.innerHTML += '<p>增加li标签DOM节点</p>'
                    }else {
                        messageContainer.innerHTML = ''
                    }
                })
        </script>
        <body>
           <h1>react-dom</h1>
           <ul id="messageContainer"></ul>
        </body>    
    </html>
    `;

const ReactDOMDemo = ()=>{
    const webRef = useRef<any>();
    const onPostMessage = ()=>{
        webRef.current?.postMessage(JSON.stringify({a:'1'}))
    }
    const onPostMessage1 = ()=>{
        webRef.current?.postMessage(JSON.stringify({a:'2'}))
    }
    const deletes = ()=>{
        webRef.current?.postMessage(JSON.stringify({a:'3'}))
    }
    return (
        <View style={{ flex:1,marginTop:20 }}>
            <Button title="增加li标签" onPress={onPostMessage} />
            <Button title="增加p标签" onPress={onPostMessage1} />
            <Button title="清空" onPress={deletes} />
            <WebView
            ref={webRef}
            source={{html:content}}
            />
        </View>
    )
} 

export default ReactDOMDemo
