import React, { PropsWithChildren } from 'react';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

type MainLayoutProps = PropsWithChildren<{

}>;

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        // this particular is same for every mobile platform
        // safeAreaProvider is used to handle the safe area insets on devices with notches or rounded corners
        // SafeAreaView is used to render content within the safe area boundaries
        <SafeAreaProvider>
            <SafeAreaView edges={['top', 'left', 'right']}>
                {/* <StatusBar style="dark" /> */}
                {children}
            </SafeAreaView>
        </SafeAreaProvider>

    )
}

export default MainLayout;