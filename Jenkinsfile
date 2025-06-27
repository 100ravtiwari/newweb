pipeline {
    agent any

    environment {
        IMAGE_NAME = 'kamlesh-portfolio'
        CONTAINER_NAME = 'kamlesh-container'
        PORT = '8080'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/100ravtiwari/newweb.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Stop Previous Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d --name $CONTAINER_NAME -p $PORT:80 $IMAGE_NAME'
            }
        }
    }
}