import {
    View,
    Text,
    StyleSheet,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity,
} from "react-native";

import { useForm, Controller } from "react-hook-form";

import { COLORS, SPACING, FONT_SIZE } from "../../../shared/constants/theme";
import Input from "../../../shared/components/Input";
import Button from "../../../shared/components/Button";

import kinalSportsLogo from "../../../../assets/kinal_sports.png";

const RegisterScreen = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            surname: "",
            username: "",
            phone: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = async (data) => {
        console.log(data);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <ScrollView
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.header}>
                    <Image
                        source={kinalSportsLogo}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text style={styles.subtitle}>
                        Crea tu cuenta
                    </Text>
                </View>

                <View style={styles.form}>
                    <Controller
                        control={control}
                        name="name"
                        rules={{
                            required: "Nombre requerido",
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Nombre"
                                placeholder="Tu nombre"
                                value={value}
                                onChangeText={onChange}
                                error={errors.name?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="surname"
                        rules={{
                            required: "Apellido requerido",
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Apellido"
                                placeholder="Tu apellido"
                                value={value}
                                onChangeText={onChange}
                                error={errors.surname?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="username"
                        rules={{
                            required: "Usuario requerido",
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Usuario"
                                placeholder="nombre_usuario"
                                value={value}
                                onChangeText={onChange}
                                autoCapitalize="none"
                                error={errors.username?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="phone"
                        rules={{
                            required: "Teléfono requerido",
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Teléfono"
                                placeholder="Ej: 12345678"
                                value={value}
                                onChangeText={onChange}
                                keyboardType="phone-pad"
                                error={errors.phone?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="email"
                        rules={{
                            required: "Correo electrónico requerido",
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Correo Electrónico"
                                placeholder="correo@ejemplo.com"
                                value={value}
                                onChangeText={onChange}
                                autoCapitalize="none"
                                keyboardType="email-address"
                                error={errors.email?.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="password"
                        rules={{
                            required: "Contraseña requerida",
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                label="Contraseña"
                                placeholder="••••••••"
                                value={value}
                                onChangeText={onChange}
                                autoCapitalize="none"
                                secureTextEntry
                                error={errors.password?.message}
                            />
                        )}
                    />

                    <Button
                        title="Registrarse"
                        onPress={handleSubmit(onSubmit)}
                        style={styles.button}
                    />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        ¿Ya tienes una cuenta?{" "}
                    </Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Login")}
                    >
                        <Text style={styles.link}>
                            Inicia sesión
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    scrollContent: {
        flexGrow: 1,
        padding: SPACING.xl,
        paddingVertical: SPACING.xxl,
    },
    header: {
        alignItems: "center",
        marginBottom: SPACING.xl,
        marginTop: SPACING.lg,
    },
    logo: {
        height: 60,
        width: 180,
        marginBottom: SPACING.xs,
    },
    subtitle: {
        fontSize: FONT_SIZE.md,
        color: COLORS.secondary,
        marginTop: SPACING.sm,
    },
    form: {
        width: "100%",
    },
    button: {
        marginTop: SPACING.lg,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: SPACING.xl,
        paddingBottom: SPACING.xxl,
    },
    footerText: {
        fontSize: FONT_SIZE.md,
        color: COLORS.textLight,
    },
    link: {
        fontSize: FONT_SIZE.md,
        color: COLORS.primary,
        fontWeight: "700",
    },
});

export default RegisterScreen;