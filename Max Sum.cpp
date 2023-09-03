#include<bits/stdc++.h>
using namespace std;
int dp[100002];
int main()
{
    int cases,n,start,end,Max,first;
    cin>>cases;
    for(int i=1;i<=cases;i++)
    {
        cin>>n;
        for(int j=1;j<=n;j++)
            cin>>dp[j];
        Max=dp[1];
        first=start=end=1;
        for(int j=2;j<=n;j++)
        {
            if(dp[j-1]>=0)
                dp[j]+=dp[j-1];
            else
                first=j;//first记录每一个dp[j]的起始位置，start记录最大的那个dp[j]的起始位置
            if(dp[j]>Max)
            {
                start=first;
                end=j; 
                Max=dp[j];
            }   
        }
        cout<<"Case "<<i<<":"<<endl<<Max<<" "<<start<<" "<<end;
        if(i!=cases)
            cout<<endl;
    }
}