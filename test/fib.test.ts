import * as cdk from '@aws-cdk/core';
import * as Fib from '../app-def/fib-stack';
import '@aws-cdk/assert/jest'

test('Check if CDK code is output as expected', () => {
    const app = new cdk.App();
    // WHEN
    new Fib.FibStack(app, 'MyTestStack');
    // THEN
    expect(app).toMatchSnapshot()
})