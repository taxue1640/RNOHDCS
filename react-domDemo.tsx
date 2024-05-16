import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

function ReactDom() {
    const webref = React.useRef(null)
    const content = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Alerts</title>
            <meta http-equiv="content-type" content="text/html; charset=utf-8">
        </head>
        <body>
            <p style="font-weight:400;font-style:normal;font-size:21px;line-height:1.58;letter-spacing:-.003em;">
                <a href="https://WWW.baidu.com">
                    Tags
                </a>
                are great for describing the essence of your story in a single word or phrase, but stories are rarely about a single thing.
            </p>
            <script>
                window.ReactNativeWebView.postMessage("Hello!")
            </script>
        </body>    
    </html>
    `;

    const [updatehHtml,setUpdateHtml] = useState(content);
    return (
        <View>
            <WebView 
            source={{html:updatehHtml,baseUrl:''}}
            ref={webref}
            />
        </View>
    )
}

export default ReactDom