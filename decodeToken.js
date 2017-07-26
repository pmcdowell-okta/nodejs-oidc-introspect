// Token (id_token)


/*
 eyJhbGciOiJSUzI1NiIsImtpZCI6ImFFaHFSNHI1MEN1cl8yUVZ6cVhQbXFfMTlXQXZTSWVaLTVidkRNcTFfM0UifQ.eyJzdWIiOiIwMHUxOGVlaHUzNDlhUzJ5WDFkOCIsIm5hbWUiOiJva3RhcHJveHkgb2t0YXByb3h5IiwidmVyIjoxLCJpc3MiOiJodHRwczovL2NvbXBhbnl4Lm9rdGEuY29tIiwiYXVkIjoidlpWNkNwOHJuNWx4ck45YVo2ODgiLCJpYXQiOjE1MDA4NjY2OTAsImV4cCI6MTUwMDg3MDI5MCwianRpIjoiSUQuOVUyazlVUzBCM08wZUdRNU5nODQ5WTAxNFJiQXNVMVAxZFZKZnMxSGNoTSIsImFtciI6WyJwd2QiXSwiaWRwIjoiMDBveTc0YzBnd0hOWE1SSkJGUkkiLCJub25jZSI6Im4tMFM2X1d6QTJNaiIsInByZWZlcnJlZF91c2VybmFtZSI6Im9rdGFwcm94eUBva3RhLmNvbSIsImF1dGhfdGltZSI6MTUwMDg2NjY3NywiYXRfaGFzaCI6InY3SXNjOFVGOHZ1R3I0NHUyYmpLQVEifQ.GO9NgwT-eqky-oOkTJShBJU9750aSCZ7XKaXrKLb3Yo2CCQMFr5uI8-4-R14yJn8J-cTFaKQPdKpb1_ye-ZDkQOy7WQ7hk-EwtBHGPwFH63o9WqqtY17wQA3FO9MYLwdTZ4t-t3ZUzFv6_QJqCT1Q9yvI2ONkuMj9kx2IS3T8qPgR_bfV8o_zxrjSGJztRIKqUHXQAA6-ULjF6I8ikfuVKlH7z8jJYako0V_FXv5x-wrBswTVLbQAxmUuTtAwcP4tZnOlqR4MIrwCUKPwYN3JF7oZjciG1g8ptplprkSCK0kNFFnt7Su9dBUG1US39BGKMOZQuxX0hQGagzfuYCP2g

 */

"use strict";

var atob = require('atob');
var validator = require('validator');
var http = require("https");


//good
//result = decodeToken("eyJhbGciOiJSUzI1NiIsImtpZCI6ImFFaHFSNHI1MEN1cl8yUVZ6cVhQbXFfMTlXQXZTSWVaLTVidkRNcTFfM0UifQ.eyJzdWIiOiIwMHUxOGVlaHUzNDlhUzJ5WDFkOCIsIm5hbWUiOiJva3RhcHJveHkgb2t0YXByb3h5IiwidmVyIjoxLCJpc3MiOiJodHRwczovL2NvbXBhbnl4Lm9rdGEuY29tIiwiYXVkIjoidlpWNkNwOHJuNWx4ck45YVo2ODgiLCJpYXQiOjE1MDA4NjY2OTAsImV4cCI6MTUwMDg3MDI5MCwianRpIjoiSUQuOVUyazlVUzBCM08wZUdRNU5nODQ5WTAxNFJiQXNVMVAxZFZKZnMxSGNoTSIsImFtciI6WyJwd2QiXSwiaWRwIjoiMDBveTc0YzBnd0hOWE1SSkJGUkkiLCJub25jZSI6Im4tMFM2X1d6QTJNaiIsInByZWZlcnJlZF91c2VybmFtZSI6Im9rdGFwcm94eUBva3RhLmNvbSIsImF1dGhfdGltZSI6MTUwMDg2NjY3NywiYXRfaGFzaCI6InY3SXNjOFVGOHZ1R3I0NHUyYmpLQVEifQ.GO9NgwT-eqky-oOkTJShBJU9750aSCZ7XKaXrKLb3Yo2CCQMFr5uI8-4-R14yJn8J-cTFaKQPdKpb1_ye-ZDkQOy7WQ7hk-EwtBHGPwFH63o9WqqtY17wQA3FO9MYLwdTZ4t-t3ZUzFv6_QJqCT1Q9yvI2ONkuMj9kx2IS3T8qPgR_bfV8o_zxrjSGJztRIKqUHXQAA6-ULjF6I8ikfuVKlH7z8jJYako0V_FXv5x-wrBswTVLbQAxmUuTtAwcP4tZnOlqR4MIrwCUKPwYN3JF7oZjciG1g8ptplprkSCK0kNFFnt7Su9dBUG1US39BGKMOZQuxX0hQGagzfuYCP2g");

/*
//Test companyx.okta.com
var client_id = "vZV6Cp8rn5lxrN9aZ688"
var client_secret = "v2GLebIROCJ21rATomT5JyWTjN2Q2XlYKpyYoVUS"
var token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFFaHFSNHI1MEN1cl8yUVZ6cVhQbXFfMTlXQXZTSWVaLTVidkRNcTFfM0UifQ.eyJzdWIiOiIwMHUxOGVlaHUzNDlhUzJ5WDFkOCIsIm5hbWUiOiJva3RhcHJveHkgb2t0YXByb3h5IiwidmVyIjoxLCJpc3MiOiJodHRwczovL2NvbXBhbnl4Lm9rdGEuY29tIiwiYXVkIjoidlpWNkNwOHJuNWx4ck45YVo2ODgiLCJpYXQiOjE1MDA4NjY2OTAsImV4cCI6MTUwMDg3MDI5MCwianRpIjoiSUQuOVUyazlVUzBCM08wZUdRNU5nODQ5WTAxNFJiQXNVMVAxZFZKZnMxSGNoTSIsImFtciI6WyJwd2QiXSwiaWRwIjoiMDBveTc0YzBnd0hOWE1SSkJGUkkiLCJub25jZSI6Im4tMFM2X1d6QTJNaiIsInByZWZlcnJlZF91c2VybmFtZSI6Im9rdGFwcm94eUBva3RhLmNvbSIsImF1dGhfdGltZSI6MTUwMDg2NjY3NywiYXRfaGFzaCI6InY3SXNjOFVGOHZ1R3I0NHUyYmpLQVEifQ.GO9NgwT-eqky-oOkTJShBJU9750aSCZ7XKaXrKLb3Yo2CCQMFr5uI8-4-R14yJn8J-cTFaKQPdKpb1_ye-ZDkQOy7WQ7hk-EwtBHGPwFH63o9WqqtY17wQA3FO9MYLwdTZ4t-t3ZUzFv6_QJqCT1Q9yvI2ONkuMj9kx2IS3T8qPgR_bfV8o_zxrjSGJztRIKqUHXQAA6-ULjF6I8ikfuVKlH7z8jJYako0V_FXv5x-wrBswTVLbQAxmUuTtAwcP4tZnOlqR4MIrwCUKPwYN3JF7oZjciG1g8ptplprkSCK0kNFFnt7Su9dBUG1US39BGKMOZQuxX0hQGagzfuYCP2g"
*/

/*
//Test oktajwt.okta.com (id_token)
var client_id = "3xD5CmPX93fbZpPxnS5a"
var client_secret = "tgTtPjX3Wox51oWQzNdp_RNoRGrWMVqn1h2f4OfA"
var token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IktVWmNjaVlnRm9hYXJKdUFyNXpMOUtCZ19WaC1IZ0FleDFCaE1LQ3VoSVkifQ.eyJzdWIiOiIwMHUyMW4wNXkzRUpYSHIxODF0NyIsIm5hbWUiOiJVc2UgUHJldmlld19PcmdzIiwidmVyIjoxLCJpc3MiOiJodHRwczovL29rdGFqd3Qub2t0YS5jb20vb2F1dGgyL2F1czIxOHZxbjlodzJnOGNpMXQ3IiwiYXVkIjoiM3hENUNtUFg5M2ZiWnBQeG5TNWEiLCJpYXQiOjE1MDEwMjgzODcsImV4cCI6MTUwMTAzMTk4NywianRpIjoiSUQudEQzYlVoeW9md095TTBlWVRQbC1uc2dlYmhZUjdfbFBneWUwWkJIRmxDSSIsImFtciI6WyJwd2QiXSwiaWRwIjoiMDBvMjE3bXNvcFRXR1A1MjkxdDciLCJub25jZSI6Im4tMFM2X1d6QTJNaiIsInByZWZlcnJlZF91c2VybmFtZSI6InRlc3R1c2VyQHdvdy5jb20iLCJhdXRoX3RpbWUiOjE1MDEwMjgzODYsImF0X2hhc2giOiJqRE9YSmZPbEtKdzVnNmQwUWlyVThBIiwiY19oYXNoIjoiaE9KcmJfWEZ6eGN6WDExNHZ6R0dWUSJ9.D28dR7qnKUQT8NO2Nd4isWp-Kltgn73ygeR-YdvEDPUfeGT6kl5EzyTGa-67Z1lkSQwN97EdXnd3rWaQXDb0vKWqNjj5_R5_HJY9UVtQJFrwy4c_la61KruKAd5Dp9cCekGyz39pdW8FXHEvTQR88nnJ-SM2aaPj6BjMeZkDtiHWvyM0ZN-QyQdv5J2JjM96vG4fwIwyMPpk5_MH06rQI4Vv_W5-CkJGP2F1YUjMM9DlwpMVsXwTTDzgG_gIgEkcR82luCMzj2bkdagTzgnHZ9y2Tx3loLvcDwDrs-7k4V1tRiuAK4lmqOjgNYrJZyiKsNyCVEsvCPBPozyMtygVoQ"
*/

//Test oktajwt.okta.com (access_token)
var client_id = "3xD5CmPX93fbZpPxnS5a"
var client_secret = "tgTtPjX3Wox51oWQzNdp_RNoRGrWMVqn1h2f4OfA"
var token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IktVWmNjaVlnRm9hYXJKdUFyNXpMOUtCZ19WaC1IZ0FleDFCaE1LQ3VoSVkifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlJwZ1hSbGhqdFh6djdYYm9QNnVjcThiT3VLa0VoWVo5dWJNQ3lOUV9wYXMiLCJpc3MiOiJodHRwczovL29rdGFqd3Qub2t0YS5jb20vb2F1dGgyL2F1czIxOHZxbjlodzJnOGNpMXQ3IiwiYXVkIjoiaHR0cHM6Ly9va3Rhand0LmlvIiwiaWF0IjoxNTAxMDI4Mzg3LCJleHAiOjE1MDEwMzE5ODcsImNpZCI6IjN4RDVDbVBYOTNmYlpwUHhuUzVhIiwidWlkIjoiMDB1MjFuMDV5M0VKWEhyMTgxdDciLCJzY3AiOlsib3BlbmlkIiwicHJvZmlsZSJdLCJzdWIiOiJ0ZXN0dXNlckB3b3cuY29tIiwiZ3JvdXBzIjpbIkV2ZXJ5b25lIl19.Da7pbzisNj_uQE-dU7_Ukw60MlI9dzwfYm38WVlUULUMYiR5yXVpCaAorywEI6E45kNxrI1fLcYoX875facxC5XzpfM11vQDiYWrzsxtDkfaKE91Ra0HRj8RUQrhL9mHQPg_MAwMNRmW3j_WLhmXPjoTNX4A1zKzrQkeg823PBQLHlhHRcw0fFcTeYSk37TFGA0sxtODXtO-c_xrADb_cSOOSL-sDxB6d-ESxffAe0PgonywDroQugX1zB1F13wwSZl30anpedFG_dWR8He8z0qyWMx7754i6nXQQQ4Qo91pCqDCNEB3D4VisyI1_vT4HK2RacDsqddDygC_HttWpA";


var callback  = function(value) {
    console.log(value)
}

isValid(token,callback)

function isValid ( token, callback ) {


    var result = decodeToken(token)

    if (result != 0) {
        if (result.payload.scp) {
            checkOktaIntrospect(result.payload.iss, token, "id_token", client_id, client_secret, callback)
        }
        else {
            checkOktaIntrospect(result.payload.iss, token, "token", client_id, client_secret, callback)
        }

    } else {
        callback ( 0 )
    }
}

function decodeToken(token) {
    var segments = token.split('.');

    if (segments.length !== 3) {
        return 0
    }

    // All segment should be base64
    var headerSeg = segments[0];
    var payloadSeg = segments[1];
    var signatureSeg = segments[2];


    var header = base64urlDecode(headerSeg);
    var payload = base64urlDecode(payloadSeg);

    if (!validator.isJSON(header) ||
        !validator.isJSON(payload)) {

        return ( 0 )

    }

    // base64 decode and parse JSON

    // var header = JSON.parse(base64urlDecode(headerSeg));
    // var payload = JSON.parse(base64urlDecode(payloadSeg));

    return {
        header: JSON.parse(header),
        payload: JSON.parse(payload),
        signature: signatureSeg
    }

}

function checkOktaIntrospect(iss, token, token_type, client_id, client_secret, callback ) {

    var oktaOrg = iss;
    var OktaIntrospectUrl = ""
    iss = iss.replace('https:\/\/', '')

    //check to see if this is from OIDC server or Authorization Server

    if (  ((iss.match(/\//g) || []).length) == 0 )  {
        //This is an OIDC id_token of access_token
        OktaIntrospectUrl = iss+"/oauth2/v1/introspect"

    } else { //This came from the Authorization Server
        var temp = iss.split("/")
        OktaIntrospectUrl = "/"+temp[1]+"/"+temp[2]+"/v1/introspect"
        iss = temp[0]
    }

    //End check for OIDC or Authorization Server

    //setup basic authentication
    var username = client_id
    var password = client_secret
    var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
    //End basic authentication

    var options = {
        "method": "POST",
        "hostname": iss,
        "port": null,
        "path": OktaIntrospectUrl+"?token="+token+"&token_type_hint=id_token&grant_type=",
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "accept": "application/json",
            "authorization": auth,
            "cache-control": "no-cache",
        }
    };

    var req = http.request(options, function (res) {
        var chunks = [];

        res.on("data", function (chunk) {
            chunks.push(chunk);
        });

        res.on("end", function () {
            var body = Buffer.concat(chunks);

            //check is token is active, and return 1 is true

            if ( body.toString().indexOf("active") ) {
                callback ( 1)
            } else {
                callback ( 0)
            }




        });
    });

    req.end();
    //

}


function base64urlDecode(str) {
    return new Buffer(base64urlUnescape(str), 'base64').toString();
};

function base64urlUnescape(str) {
    str += Array(5 - str.length % 4).join('=');
    return str.replace(/\-/g, '+').replace(/_/g, '/');
}

