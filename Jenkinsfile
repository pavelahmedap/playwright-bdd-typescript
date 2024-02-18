pipeline {
  agent any

  tools {
    nodejs "node"
  }

  stages {
    stage('Build') {
      steps {
        echo '*************Build********'
        sh 'npm install'
        sh 'npx playwright install --with-deps'
      }
    }

    stage('e2e-tests') {
      steps {
        echo '**********Running e2e-tests**********'
        sh 'npm ci'
        sh 'npx bddgen && npx playwright test'
      }
    }

    stage('Generate Allure Report') {
      steps {
        echo '*************Generate Allure Report*********'
        // sh './src/reports clean test'
        // sh 'src/reports/ clean test'
        // git 'https://github.com/eroshenkoam/allure-example.git'
        //         sh './gradlew clean test'
      }
      post {
        always {
          allure includeProperties:
            false,
            jdk: '',
            results: [
              [path: 'src/reports/allure-results']
            ]
        }
      }
    }
  }
}