// classic Phong equation
#version 410

in vec4 vPosition;
in vec4 vNormal;

uniform vec3 Ka;
uniform vec3 Kd;
uniform vec3 Ks;

uniform float specularPower;
uniform mat4 NormalMatrix;

uniform vec3 Ia;
uniform vec3 Id;
uniform vec3 Is;

uniform vec3 lightPosition; 

uniform vec3 cameraPosition;

out vec4 FragColour;

void main() {
	
	vec3 Ambient = Ka * Ia; 

	vec3 N = normalize(vec3(vNormal));
	vec3 L = lightPosition - vPosition.xyz;
	float dotLN = max(0.0f, dot(N, normalize(L)));
	vec3 Diffuse = Kd * dotLN * Id;

	vec3 viewDirection = cameraPosition - vPosition.xyz; 
	vec3 lightReflect = L + viewDirection;

	float dotLrE = max(0.0f, dot(normalize(lightReflect), N));
	vec3 Specular = Ks * pow(dotLrE, specularPower) * Is * dotLN;

	FragColour = vec4(Ambient + Diffuse + Specular,1);
	
}